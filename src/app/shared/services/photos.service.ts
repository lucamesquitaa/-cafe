import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceGeneric } from './generic.service';
import { Retorno } from '../models/retorno.model';
import { GetAllPhotos } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends ServiceGeneric {
  override urlServiceREST: string = "/api/Photos";

  constructor(public override injector: Injector) {
    super(injector);
  }

  getByCafeteria(cafeteriaId: string): Observable<Retorno<GetAllPhotos[]>> {
    return this.http.get<Retorno<GetAllPhotos[]>>(`${this.getFullUrl()}/cafeteria/${cafeteriaId}`);
  }
}
