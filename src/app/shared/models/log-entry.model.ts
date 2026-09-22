/**
 * Chaves de roteamento conhecidas hoje pelo backend (LogsCafeteria).
 * Mantido como union + string para não quebrar se um novo valor aparecer.
 */
export type LogRoutingKey = 'cafeteria.post' | 'cafeteria.put' | 'cafeteria.error' | string;

/** Envelope recebido em cada frame do WebSocket /ws/logs. */
export interface LogEnvelope {
  fila: string;
  routingKey: LogRoutingKey;
  recebidoEm: string; // UTC (ISO 8601)
  payload: unknown; // objeto JSON arbitrário OU string crua
}

/**
 * Formato conhecido do payload publicado pelo backend Cafeteria (MensagemCafeteria /
 * MensagemCafeteriaDeadLetter). Todos os campos são opcionais pois o payload pode vir
 * em outro formato (ou ser uma string crua) e não deve quebrar a exibição.
 */
interface PayloadCafeteria {
  cafeteriaId?: string;
  name?: string;
  photo?: string;
  Erro?: string;
}

/** LogEnvelope + campos derivados usados só na exibição/filtro. */
export interface LogEntry extends LogEnvelope {
  /** Id sequencial gerado no cliente (trackBy, seleção). */
  id: number;
  recebidoEmLocal: Date;
  /** payload já convertido em texto, usado na busca livre e no resumo da linha. */
  payloadTexto: string;
  /** Nome da cafeteria (campo "name" do payload), quando presente. */
  nomeCafeteria: string | null;
  /** URL da FotoPrincipal (campo "photo" do payload), quando presente. */
  fotoCafeteria: string | null;
  /** Mensagem de erro (campo "Erro" do payload de dead-letter), quando presente. */
  erroMensagem: string | null;
}

function extrairPayloadCafeteria(payload: unknown): PayloadCafeteria | null {
  if (payload && typeof payload === 'object' && !Array.isArray(payload)) {
    return payload as PayloadCafeteria;
  }
  return null;
}

export function criarLogEntry(envelope: LogEnvelope, id: number): LogEntry {
  const dados = extrairPayloadCafeteria(envelope.payload);

  return {
    ...envelope,
    id,
    recebidoEmLocal: new Date(envelope.recebidoEm),
    payloadTexto: typeof envelope.payload === 'string'
      ? envelope.payload
      : JSON.stringify(envelope.payload),
    nomeCafeteria: dados?.name ?? null,
    fotoCafeteria: dados?.photo ?? null,
    erroMensagem: dados?.Erro ?? null
  };
}

export function formatarPayload(log: LogEntry): string {
  if (typeof log.payload === 'string') {
    return log.payload;
  }
  try {
    return JSON.stringify(log.payload, null, 2);
  } catch {
    return log.payloadTexto;
  }
}
