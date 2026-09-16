import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { forkJoin, of, Subscription } from 'rxjs';
import { catchError, filter, finalize, map, switchMap } from 'rxjs/operators';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CafeteriaService } from 'src/app/shared/services/cafeteria.service';
import { PhotosService } from 'src/app/shared/services/photos.service';
import { GetCafeteriaById } from 'src/app/shared/models/cafeteria.model';
import { FOTO_PLACEHOLDER, GetAllPhotos, escolherCapa } from 'src/app/shared/models/photo.model';
import { CafeteriaDetalhe, CafeteriaStateService } from './cafeteria-state.service';

interface CafeteriaHero {
  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-cafeteria',
  standalone: false,
  templateUrl: './cafeteria.component.html',
  styleUrl: './cafeteria.component.scss',
  providers: [CafeteriaStateService]
})
export class CafeteriaComponent extends ComponentBase implements OnInit, OnDestroy {
  itemSelected: CafeteriaHero | null = null;
  isLoved: boolean = false;
  isOpen: boolean = true;

  private rotaSubscription?: Subscription;

    constructor(
      public override injector: Injector,
      private cafeteriaService: CafeteriaService,
      private photosService: PhotosService,
      private state: CafeteriaStateService
    ) {
      super(injector);
    }

    override ngOnInit(): void {
      window.scrollTo(0, 0);
      this.rotaSubscription = this.activatedRoute.paramMap.pipe(
        map(params => params.get('id')),
        filter((id): id is string => !!id),
        switchMap(id => this.buscarDetalhe(id))
      ).subscribe(detalhe => {
        if (!detalhe) {
          return;
        }
        this.state.definir(detalhe.cafeteria, detalhe.fotos);
        this.itemSelected = {
          id: detalhe.cafeteria.id,
          name: detalhe.cafeteria.nome,
          image: this.imagemHero(detalhe.cafeteria, detalhe.fotos)
        };
        this.context.pageTitle = detalhe.cafeteria.nome;
      });
    }

    override ngOnDestroy(): void {
      this.rotaSubscription?.unsubscribe();
    }

    private buscarDetalhe(id: string) {
      this.showLoading();
      return forkJoin({
        cafeteria: this.cafeteriaService.getById(id),
        // A galeria é complementar: se a API de fotos falhar, a página ainda abre sem ela
        fotos: this.photosService.getByCafeteria(id).pipe(catchError(() => of(null)))
      }).pipe(
        finalize(() => this.hideLoading()),
        map(({ cafeteria, fotos }): CafeteriaDetalhe | null => {
          if (!cafeteria.sucesso || !cafeteria.data) {
            this.toastr.error(cafeteria.mensagem ?? 'Cafeteria não encontrada.');
            return null;
          }
          return { cafeteria: cafeteria.data, fotos: fotos?.data ?? [] };
        }),
        catchError(erro => {
          this.toastr.error(erro.error?.mensagem ?? 'Não foi possível carregar a cafeteria.');
          return of(null);
        })
      );
    }

    /** Capa do hero: foto principal cadastrada, senão a foto em destaque da galeria, senão a primeira. */
    private imagemHero(cafeteria: GetCafeteriaById, fotos: GetAllPhotos[]): string {
      return cafeteria.fotoPrincipal || escolherCapa(fotos)?.url || FOTO_PLACEHOLDER;
    }

    /** Se a URL do bucket falhar, mostra o placeholder em vez de um hero vazio. */
    usarPlaceholderHero(): void {
      if (this.itemSelected && this.itemSelected.image !== FOTO_PLACEHOLDER) {
        this.itemSelected.image = FOTO_PLACEHOLDER;
      }
    }

    toggleLove() {
      this.isLoved = !this.isLoved;
    }

    toggleFavorite() {
      this.isLoved = !this.isLoved;
      // Aqui você pode adicionar lógica para salvar no backend
    }

    goBack() {
      this.router.navigate(['/catalogo']);
    }

    openOrderModal() {
      // Implementar modal de pedido
      console.log('Abrindo modal de pedido...');
    }

}
