import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetCafeteriaById } from 'src/app/shared/models/cafeteria.model';
import { GetAllPhotos } from 'src/app/shared/models/photo.model';

export interface CafeteriaDetalhe {
  cafeteria: GetCafeteriaById;
  fotos: GetAllPhotos[];
}

/**
 * Compartilha a cafeteria carregada pelo CafeteriaComponent com as rotas filhas
 * (inicio, cardapio, missoes, beneficios), evitando refazer as chamadas em cada aba.
 */
@Injectable()
export class CafeteriaStateService {
  private readonly detalheSubject = new BehaviorSubject<CafeteriaDetalhe | null>(null);

  readonly detalhe$ = this.detalheSubject.asObservable();

  definir(cafeteria: GetCafeteriaById, fotos: GetAllPhotos[]): void {
    this.detalheSubject.next({ cafeteria, fotos });
  }
}
