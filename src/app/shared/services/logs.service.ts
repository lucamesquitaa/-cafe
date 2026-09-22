import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LogEntry, LogEnvelope, criarLogEntry } from '../models/log-entry.model';

export type EstadoConexaoLogs = 'conectando' | 'conectado' | 'reconectando' | 'desconectado';

/** Sem autenticação: o endpoint /ws/logs é público. */
const WS_URL = 'ws://localhost:8090/ws/logs';
const RECONEXAO_DELAY_MS = 4000;

/**
 * Cliente do WebSocket /ws/logs (broadcast de eventos das filas RabbitMQ).
 * Expõe o stream de logs e o estado da conexão como Observables; reconecta
 * automaticamente com um delay fixo enquanto conectar() não for desfeito
 * por desconectar().
 */
@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private socket: WebSocket | null = null;
  private reconexaoTimer: ReturnType<typeof setTimeout> | null = null;
  private fechadoManualmente = true;
  private proximoId = 1;

  private readonly logSubject = new Subject<LogEntry>();
  readonly log$ = this.logSubject.asObservable();

  private readonly estadoSubject = new BehaviorSubject<EstadoConexaoLogs>('desconectado');
  readonly estado$ = this.estadoSubject.asObservable();

  private readonly erroSubject = new Subject<string>();
  readonly erro$ = this.erroSubject.asObservable();

  /** Idempotente: chamar de novo enquanto já há conexão/reconexão em curso não faz nada. */
  conectar(): void {
    if (this.socket || this.reconexaoTimer) {
      return;
    }
    this.fechadoManualmente = false;
    this.abrirConexao();
  }

  /** Fecha a conexão e cancela qualquer reconexão agendada. */
  desconectar(): void {
    this.fechadoManualmente = true;

    if (this.reconexaoTimer) {
      clearTimeout(this.reconexaoTimer);
      this.reconexaoTimer = null;
    }

    this.socket?.close();
    this.socket = null;
    this.estadoSubject.next('desconectado');
  }

  private abrirConexao(): void {
    this.estadoSubject.next(this.estadoSubject.value === 'desconectado' ? 'conectando' : 'reconectando');

    let socket: WebSocket;
    try {
      socket = new WebSocket(WS_URL);
    } catch {
      this.erroSubject.next('Não foi possível iniciar a conexão com o servidor de logs.');
      this.agendarReconexao();
      return;
    }
    this.socket = socket;

    socket.onopen = () => {
      this.estadoSubject.next('conectado');
    };

    socket.onmessage = (event: MessageEvent) => {
      this.processarMensagem(event.data);
    };

    socket.onerror = () => {
      this.erroSubject.next('Erro na conexão com o servidor de logs.');
    };

    socket.onclose = () => {
      this.socket = null;

      if (this.fechadoManualmente) {
        this.estadoSubject.next('desconectado');
        return;
      }

      this.estadoSubject.next('reconectando');
      this.agendarReconexao();
    };
  }

  private processarMensagem(data: string): void {
    let envelope: LogEnvelope;
    try {
      envelope = JSON.parse(data);
    } catch {
      this.erroSubject.next('Uma mensagem recebida estava em formato inválido e foi descartada.');
      return;
    }
    this.logSubject.next(criarLogEntry(envelope, this.proximoId++));
  }

  private agendarReconexao(): void {
    if (this.reconexaoTimer || this.fechadoManualmente) {
      return;
    }
    this.reconexaoTimer = setTimeout(() => {
      this.reconexaoTimer = null;
      if (!this.fechadoManualmente) {
        this.abrirConexao();
      }
    }, RECONEXAO_DELAY_MS);
  }
}
