import { Component, OnInit, OnDestroy, ElementRef, Injector } from '@angular/core';
import { forkJoin, of, Subscription } from 'rxjs';
import { catchError, filter, finalize, map, switchMap } from 'rxjs/operators';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CafeteriaService } from 'src/app/shared/services/cafeteria.service';
import { PhotosService } from 'src/app/shared/services/photos.service';
import { GetCafeteriaById } from 'src/app/shared/models/cafeteria.model';
import { GetAllPhotos } from 'src/app/shared/models/photo.model';
import { CafeteriaDetalhe, CafeteriaStateService } from './cafeteria-state.service';

@Component({
  selector: 'app-cafeteria',
  standalone: false,
  templateUrl: './cafeteria.component.html',
  styleUrl: './cafeteria.component.scss',
  providers: [CafeteriaStateService]
})
export class CafeteriaComponent extends ComponentBase implements OnInit, OnDestroy {
  itemSelected: any;
  isLoved: boolean = false;
  isOpen: boolean = true;

  private rotaSubscription?: Subscription;

    constructor(
      public override injector: Injector,
      private elementRef: ElementRef,
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

    private imagemHero(cafeteria: GetCafeteriaById, fotos: GetAllPhotos[]): string {
      return cafeteria.fotoPrincipal
        || fotos.find(foto => foto.stared)?.url
        || fotos[0]?.url
        || 'assets/cheirin-bao.jpg';
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
