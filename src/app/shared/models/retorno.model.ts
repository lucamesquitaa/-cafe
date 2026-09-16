/**
 * Envelope padrão de resposta da API (classe Retorno do backend)
 */
export interface Retorno<T = any> {
  sucesso: boolean;
  mensagem?: string;
  excecaoMensagem?: string;
  data?: T;
}
