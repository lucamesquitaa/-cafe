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
  temMais = false;

  private pagina = 1;
  private readonly tamanhoPagina = 20;

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

  carregarMais(): void {
    this.pagina++;
    this.carregarCafeterias();
  }

  private carregarCafeterias(): void {
    this.showLoading();
    this.cafeteriaService.getAll(this.pagina, this.tamanhoPagina).subscribe({
      next: (retorno) => {
        this.hideLoading();
        const lista = retorno.data ?? [];
        this.cafeterias = [
          ...this.cafeterias,
          ...lista.map(cafeteria => ({
            id: cafeteria.id,
            fav: false,
            name: cafeteria.nome,
            description: `${cafeteria.endereco}, ${cafeteria.numero}`,
            image: cafeteria.fotoPrincipal || 'assets/chHD.jpg'
          }))
        ];
        // A API não devolve o total: só há próxima página se esta veio cheia
        this.temMais = lista.length === this.tamanhoPagina;
      },
      error: (erro) => {
        this.hideLoading();
        this.toastr.error(erro.error?.mensagem ?? 'Não foi possível carregar as cafeterias.');
      }
    });
  }

  onCafeteriaClick(cafeteria: any) {
    this.context.pageTitle = cafeteria.name;
    this.router.navigate(['/cafeteria', cafeteria.id]);

  }
}
