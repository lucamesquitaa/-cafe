import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeteriaRoutingModule } from './cafeteria-routing.module';
import { CafeteriaComponent } from './cafeteria.component';
import { InicioComponent } from './inicio/inicio.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { MissoesComponent } from './missoes/missoes.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    CafeteriaComponent,
    InicioComponent,
    CardapioComponent,
    MissoesComponent,
    BeneficiosComponent
  ],
  imports: [
    CommonModule,
    CafeteriaRoutingModule,
    SharedModule
]
})
export class CafeteriaModule { }
