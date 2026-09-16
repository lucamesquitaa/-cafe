import { Component, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CafeteriaService } from 'src/app/shared/services/cafeteria.service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent extends ComponentBase{
  cafeterias: any[] = [];

  constructor(
    public override injector: Injector,
    private cafeteriaService: CafeteriaService
  ) {
    super(injector);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);
    this.context.pageTitle = "Clube Cafeína";
    this.carregarCafeterias();
  }

  carregarCafeterias(): void {
    this.showLoading();
    this.cafeteriaService.getAll().subscribe({
      next: (retorno) => {
        this.hideLoading();
        if (!retorno.sucesso) {
          this.toastr.error(retorno.mensagem);
          return;
        }
        this.cafeterias = (retorno.data ?? []).map(cafeteria => ({
          id: cafeteria.id,
          fav: false,
          name: cafeteria.nome,
          description: cafeteria.endereco,
          image: cafeteria.fotoPrincipal || 'assets/chHD.jpg'
        }));
      },
      error: () => {
        this.hideLoading();
        this.toastr.error('Não foi possível carregar as cafeterias.');
      }
    });
  }

  onCafeteriaClick(cafeteria: any) {
    this.context.pageTitle = cafeteria.name;
    this.router.navigate(['/cafeteria', cafeteria.id]); 
    
  }
}