import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbDropdownConfig, NgbDropdownModule, NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
      declarations: [
            ItemComponent,
            HeaderComponent,
            FooterComponent
      ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
],
  exports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbTypeaheadModule,
        NgbDropdownModule,
      ItemComponent,
      HeaderComponent,
      FooterComponent
],
providers: [NgbDropdownConfig
]
})
export class SharedModule { }
