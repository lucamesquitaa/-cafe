import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from './shared/components/component.base';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbConfig, NgbDropdown, NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentBase implements OnInit{
  menusVisivel: boolean = true;
  textSaudacao = "Olá";
  showHeaderFooter: boolean = true;
  
  constructor(public override injector: Injector,
              ngbConfig: NgbConfig,
              public override router: Router
  ){
    super(injector);
    ngbConfig.animation = false;
  }


  override ngOnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Esconde header e footer na página de login
        this.showHeaderFooter = !event.url.includes('/login');
      }
    });
  }

}

