import { Component, Input } from '@angular/core';
import { FOTO_PLACEHOLDER } from '../../models/photo.model';

/** Dados que o card de cafeteria exibe no catálogo. */
export interface CafeteriaCard {
  id: string;
  fav: boolean;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input("cafeteria") cafeteria!: CafeteriaCard;

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.cafeteria.fav = !this.cafeteria.fav;
  }

  /** Se a URL do bucket falhar, volta para o placeholder em vez de mostrar imagem quebrada. */
  usarPlaceholder(): void {
    if (this.cafeteria.image !== FOTO_PLACEHOLDER) {
      this.cafeteria.image = FOTO_PLACEHOLDER;
    }
  }
}
