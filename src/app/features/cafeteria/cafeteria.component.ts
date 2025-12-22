import { Component, OnInit, HostListener, ElementRef, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';

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
    cafeterias = [
      { id: "123", name: 'Cheirim Bão', description: 'Centro', image: "assets/cheirin-bao.jpg" },
      { id: "124", name: 'Café da Praça', description: 'Jardim', image: "https://images.squarespace-cdn.com/content/v1/606c6f7eb1c93132f0bed4e6/1645538391593-ZT1K6ZJYJ2UNVNX0TTH0/bonomi.jpeg" },
      { id: "125", name: 'Café Gourmet', description: 'Zona Sul', image: "https://quantocustaviajar.com/blog/wp-content/uploads/2023/01/foto-casa-granu.png" },
      { id: "126", name: 'Café Artesanal', description: 'Zona Norte', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgED9CVV-iuo8z-3RjfuWDO0b9MbvMNoPPg&s" }
    ];

    constructor(
      public override injector: Injector,
      private elementRef: ElementRef
    ) {
      super(injector);
    }

    override ngOnInit(): void {
      window.scrollTo(0, 0);
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.itemSelected = this.cafeterias.find(cafeteria => cafeteria.id === id);
      if (this.itemSelected) {
        this.context.pageTitle = this.itemSelected.name;
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
