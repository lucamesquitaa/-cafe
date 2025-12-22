import { Component, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent extends ComponentBase{
  cafeterias = [
    { id: "123", fav: false, name: 'Cheirim Bão', description: 'Centro', image: "assets/chHD.jpg" },
    { id: "124", fav: false, name: 'Café da Praça', description: 'Jardim', image: "https://images.squarespace-cdn.com/content/v1/606c6f7eb1c93132f0bed4e6/1645538391593-ZT1K6ZJYJ2UNVNX0TTH0/bonomi.jpeg" },
    { id: "125", fav: true, name: 'Café Gourmet', description: 'Zona Sul', image: "https://quantocustaviajar.com/blog/wp-content/uploads/2023/01/foto-casa-granu.png" },
    { id: "126", fav: false, name: 'Café Artesanal', description: 'Zona Norte', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgED9CVV-iuo8z-3RjfuWDO0b9MbvMNoPPg&s" }
  ];

  constructor(public override injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);
    this.context.pageTitle = "Clube Cafeína";
  }

  onCafeteriaClick(cafeteria: any) {
    this.context.pageTitle = cafeteria.name;
    this.router.navigate(['/cafeteria', cafeteria.id]); 
    
  }
}