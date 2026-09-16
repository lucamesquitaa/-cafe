import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServiceGeneric } from './generic.service';
import { Retorno } from '../models/retorno.model';
import { GetAllPhotos, escolherCapa } from '../models/photo.model';

/**
 * Cliente do PhotosController (api/Photos).
 */
@Injectable({
  providedIn: 'root'
})
export class PhotosService extends ServiceGeneric {
  override urlServiceREST: string = "/api/Photos";

  constructor(public override injector: Injector) {
    super(injector);
  }

  /** GET api/Photos/cafeteria/{cafeteriaId} — endpoint público. */
  getByCafeteria(cafeteriaId: string): Observable<Retorno<GetAllPhotos[]>> {
    return this.http.get<Retorno<GetAllPhotos[]>>(this.urlCafeteria(cafeteriaId));
  }

  /**
   * URL da foto de capa da cafeteria (destaque ou primeira), ou null se não houver fotos
   * ou a chamada falhar. Nunca emite erro: serve para preencher cards sem travar a listagem.
   */
  getCapa(cafeteriaId: string): Observable<string | null> {
    return this.getByCafeteria(cafeteriaId).pipe(
      map(retorno => escolherCapa(retorno.data ?? [])?.url ?? null),
      catchError(() => of(null))
    );
  }

  /**
   * POST api/Photos/cafeteria/{cafeteriaId} — multipart com o campo "files".
   * Exige usuário logado com acesso à cafeteria ([Authorize] + [ValidateCafeteriaAccess]).
   */
  enviar(cafeteriaId: string, arquivos: File[]): Observable<Retorno<GetAllPhotos[]>> {
    const form = new FormData();
    arquivos.forEach(arquivo => form.append('files', arquivo, arquivo.name));

    return this.http.post<Retorno<GetAllPhotos[]>>(this.urlCafeteria(cafeteriaId), form, {
      headers: this.cabecalhoAutenticado()
    });
  }

  /**
   * DELETE api/Photos/cafeteria/{cafeteriaId} — corpo JSON com a lista de ids das fotos.
   * Exige usuário logado com acesso à cafeteria.
   */
  excluir(cafeteriaId: string, fotoIds: string[]): Observable<Retorno> {
    return this.http.delete<Retorno>(this.urlCafeteria(cafeteriaId), {
      headers: this.cabecalhoAutenticado(),
      body: fotoIds
    });
  }

  private urlCafeteria(cafeteriaId: string): string {
    return `${this.getFullUrl()}/cafeteria/${encodeURIComponent(cafeteriaId)}`;
  }

  /** O projeto não tem interceptor de autenticação: o token salvo no login vai no header. */
  private cabecalhoAutenticado(): HttpHeaders {
    const token = this.cookieService.get('access_token');
    return token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders();
  }
}
