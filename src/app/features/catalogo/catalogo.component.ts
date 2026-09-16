import { Component, Injector, OnDestroy } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CafeteriaCard } from 'src/app/shared/components/item/item.component';
import { FOTO_PLACEHOLDER } from 'src/app/shared/models/photo.model';
import { CafeteriaService } from 'src/app/shared/services/cafeteria.service';
import { PhotosService } from 'src/app/shared/services/photos.service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent extends ComponentBase implements OnDestroy {
  cafeterias: CafeteriaCard[] = [];
  temMais = false;

  private pagina = 1;
  private readonly tamanhoPagina = 20;
  private readonly assinaturas = new Subscription();

  constructor(
    public override injector: Injector,
    private cafeteriaService: CafeteriaService,
    private photosService: PhotosService
  ) {
    super(injector);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);
    this.context.pageTitle = "Clube Cafeína";
    this.carregarCafeterias();
  }

  override ngOnDestroy(): void {
    this.assinaturas.unsubscribe();
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
        const novos: CafeteriaCard[] = lista.map(cafeteria => ({
          id: cafeteria.id,
          fav: false,
          name: cafeteria.nome,
          description: `${cafeteria.endereco}, ${cafeteria.numero}`,
          image: cafeteria.fotoPrincipal || FOTO_PLACEHOLDER
        }));
        this.cafeterias = [...this.cafeterias, ...novos];
        // A API não devolve o total: só há próxima página se esta veio cheia
        this.temMais = lista.length === this.tamanhoPagina;

        this.preencherCapas(novos.filter(card => card.image === FOTO_PLACEHOLDER));
      },
      error: (erro) => {
        this.hideLoading();
        this.toastr.error(erro.error?.mensagem ?? 'Não foi possível carregar as cafeterias.');
      }
    });
  }

  /**
   * Cards sem fotoPrincipal recebem a capa da galeria (API de fotos) sem bloquear a lista:
   * o placeholder aparece na hora e é trocado assim que a foto chega.
   */
  private preencherCapas(cards: CafeteriaCard[]): void {
    if (!cards.length) {
      return;
    }

    const buscas = cards.map(card =>
      this.photosService.getCapa(card.id).pipe(map(url => ({ card, url })))
    );

    this.assinaturas.add(
      merge(...buscas).subscribe(({ card, url }) => {
        if (url) {
          card.image = url;
        }
      })
    );
  }

  onCafeteriaClick(cafeteria: CafeteriaCard) {
    this.context.pageTitle = cafeteria.name;
    this.router.navigate(['/cafeteria', cafeteria.id]);
  }
}
