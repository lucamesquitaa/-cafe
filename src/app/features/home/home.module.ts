import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { CatalogoModule } from '../catalogo/catalogo.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CatalogoModule,
    SharedModule
  ],
  providers: [NgbTypeaheadConfig],
})
export class HomeModule { }
