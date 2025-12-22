import { Component, Injector } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map  } from 'rxjs/operators';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {

  hotel: any;

	filteredHoteis: any[] = [];

  hoteis!: any[];

  constructor(public override injector: Injector) {
    super(injector);

  }
  override ngOnInit(): void {
    this.context.pageTitle = "Clube Cafeína";
    window.scrollTo(0, 0);
    // Adicionar classe para animações após carregamento
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
  }
	buscar(){
		this.router.navigate(['catalogo']);
	}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

