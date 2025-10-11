import { Injectable } from '@angular/core';
import { ContextModel } from '../models/context.model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private static context : ContextModel = <ContextModel>{
    usuarioAutenticado: false,
    token: "",
    usuario: {
      id: "",
      email: "",
      username: ""
    },
    cart: {
      number: 0,
      products: []
    },
    pageTitle: "Clube Cafeína"
  };

  static getContext(): ContextModel{
    return ContextService.context;
  }
}
