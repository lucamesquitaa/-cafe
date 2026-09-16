import { Component, OnInit, HostListener, ElementRef, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CafeteriaService } from 'src/app/shared/services/cafeteria.service';

@Component({
  selector: 'app-cafeteria',
  standalone: false,
  templateUrl: './cafeteria.component.html',
  styleUrl: './cafeteria.component.scss'
})
export class CafeteriaComponent extends ComponentBase implements OnInit{
  itemSelected: any;
  isLoved: boolean = false;
  isOpen: boolean = true;

    constructor(
      public override injector: Injector,
      private elementRef: ElementRef,
      private cafeteriaService: CafeteriaService
    ) {
      super(injector);
    }

    override ngOnInit(): void {
      window.scrollTo(0, 0);
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (!id) {
        return;
      }

      this.showLoading();
      this.cafeteriaService.getById(id).subscribe({
        next: (retorno) => {
          this.hideLoading();
          if (!retorno.sucesso || !retorno.data) {
            this.toastr.error(retorno.mensagem);
            return;
          }
          const cafeteria = retorno.data;
          this.itemSelected = {
            id: cafeteria.id,
            name: cafeteria.nome,
            description: cafeteria.descricao,
            image: cafeteria.fotoPrincipal || 'assets/cheirin-bao.jpg'
          };
          this.context.pageTitle = this.itemSelected.name;
        },
        error: () => {
          this.hideLoading();
          this.toastr.error('Não foi possível carregar a cafeteria.');
        }
      });
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
