import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceGeneric } from './generic.service';
import { Retorno } from '../models/retorno.model';
import { GetAllCafeterias, GetCafeteriaById } from '../models/cafeteria.model';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService extends ServiceGeneric {
  override urlServiceREST: string = "https://localhost:8080/api/Cafeterias";

  constructor(public override injector: Injector) {
    super(injector);
  }

  getAll(page: number = 1, pageSize: number = 20): Observable<Retorno<GetAllCafeterias[]>> {
    const params = new HttpParams()
      .set('page', page)
      .set('pageSize', pageSize);

    return this.http.get<Retorno<GetAllCafeterias[]>>(this.urlServiceREST, { params });
  }

  getById(id: string): Observable<Retorno<GetCafeteriaById>> {
    return this.http.get<Retorno<GetCafeteriaById>>(`${this.urlServiceREST}/${id}`);
  }
}
