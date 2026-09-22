import { ChangeDetectorRef, Component, Injector, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { LogEntry, LogRoutingKey, formatarPayload } from 'src/app/shared/models/log-entry.model';
import { FOTO_PLACEHOLDER } from 'src/app/shared/models/photo.model';
import { EstadoConexaoLogs, LogsService } from 'src/app/shared/services/logs.service';

type FiltroTipo = 'todos' | LogRoutingKey;

const TAMANHO_MAXIMO_BUFFER = 800;

@Component({
  selector: 'app-logs',
  standalone: false,
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss'
})
export class LogsComponent extends ComponentBase implements OnDestroy {
  readonly TAMANHO_MAXIMO_BUFFER = TAMANHO_MAXIMO_BUFFER;
  readonly FOTO_PLACEHOLDER = FOTO_PLACEHOLDER;

  readonly tiposFiltro: { valor: FiltroTipo; label: string }[] = [
    { valor: 'todos', label: 'Todos' },
    { valor: 'cafeteria.post', label: 'Post' },
    { valor: 'cafeteria.put', label: 'Put' },
    { valor: 'cafeteria.error', label: 'Error' }
  ];

  readonly estadoLabels: Record<EstadoConexaoLogs, string> = {
    conectando: 'Conectando...',
    conectado: 'Conectado',
    reconectando: 'Reconectando...',
    desconectado: 'Desconectado'
  };

  /** Buffer completo (limitado), sempre atualizado mesmo enquanto pausado. */
  logs: LogEntry[] = [];
  /** Recorte visível (filtro + busca aplicados); congelado enquanto pausado. */
  logsExibidos: LogEntry[] = [];

  estadoConexao: EstadoConexaoLogs = 'desconectado';
  mensagemErro: string | null = null;

  filtroTipo: FiltroTipo = 'todos';
  textoBusca = '';

  pausado = false;
  novosDesdePausa = 0;

  logSelecionadoId: number | null = null;

  private readonly assinaturas = new Subscription();

  constructor(
    public override injector: Injector,
    private logsService: LogsService,
    private cdr: ChangeDetectorRef
  ) {
    super(injector);
  }

  override ngOnInit(): void {
    this.context.pageTitle = 'Logs em Tempo Real';

    this.assinaturas.add(
      this.logsService.log$.subscribe(log => this.receberLog(log))
    );
    this.assinaturas.add(
      this.logsService.estado$.subscribe(estado => {
        this.estadoConexao = estado;
        if (estado === 'conectado') {
          this.mensagemErro = null;
        }
        this.cdr.markForCheck();
      })
    );
    this.assinaturas.add(
      this.logsService.erro$.subscribe(mensagem => {
        this.mensagemErro = mensagem;
        this.toastr.error(mensagem);
        this.cdr.markForCheck();
      })
    );

    this.logsService.conectar();
  }

  override ngOnDestroy(): void {
    this.assinaturas.unsubscribe();
    this.logsService.desconectar();
  }

  onFiltroChange(tipo: FiltroTipo): void {
    this.filtroTipo = tipo;
    this.aplicarFiltro();
  }

  onBuscaChange(): void {
    this.aplicarFiltro();
  }

  limparBusca(): void {
    this.textoBusca = '';
    this.aplicarFiltro();
  }

  alternarPausa(): void {
    this.pausado = !this.pausado;
    if (!this.pausado) {
      this.novosDesdePausa = 0;
      this.aplicarFiltro();
    }
  }

  selecionarLog(log: LogEntry): void {
    this.logSelecionadoId = this.logSelecionadoId === log.id ? null : log.id;
  }

  reconectarManualmente(): void {
    this.logsService.desconectar();
    this.logsService.conectar();
  }

  limparBuffer(): void {
    this.logs = [];
    this.logsExibidos = [];
    this.novosDesdePausa = 0;
    this.logSelecionadoId = null;
  }

  formatarPayload(log: LogEntry): string {
    return formatarPayload(log);
  }

  classeRoutingKey(routingKey: LogRoutingKey): string {
    switch (routingKey) {
      case 'cafeteria.post': return 'tipo-post';
      case 'cafeteria.put': return 'tipo-put';
      case 'cafeteria.error': return 'tipo-error';
      default: return 'tipo-outro';
    }
  }

  trackByLogId(_index: number, log: LogEntry): number {
    return log.id;
  }

  /** Se a foto vinda do payload falhar (URL inválida/expirada), cai para o placeholder padrão. */
  onFotoErro(log: LogEntry): void {
    if (log.fotoCafeteria !== FOTO_PLACEHOLDER) {
      log.fotoCafeteria = FOTO_PLACEHOLDER;
    }
  }

  private receberLog(log: LogEntry): void {
    this.logs = [log, ...this.logs].slice(0, TAMANHO_MAXIMO_BUFFER);

    if (this.pausado) {
      this.novosDesdePausa++;
      this.cdr.markForCheck();
      return;
    }

    this.aplicarFiltro();
  }

  private aplicarFiltro(): void {
    const busca = this.textoBusca.trim().toLowerCase();

    this.logsExibidos = this.logs.filter(log => {
      const combinaTipo = this.filtroTipo === 'todos' || log.routingKey === this.filtroTipo;
      if (!combinaTipo) {
        return false;
      }
      if (!busca) {
        return true;
      }
      return log.payloadTexto.toLowerCase().includes(busca) || log.fila.toLowerCase().includes(busca);
    });

    this.cdr.markForCheck();
  }
}
