import { ResultLoginModel } from "./login.model";
import { Usuario } from "./usuario.model";

/**
 * Contexto do usuário
 */
export interface ContextModel {
    usuarioAutenticado: boolean,
    usuario: ResultLoginModel,
    token: string,
    pageTitle: string
}
