import { Component, Input } from '@angular/core';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends ComponentBase {
  @Input() title: string = 'Clube Cafeína';

  isLoved: boolean = false;

  toggleLove() {
    this.isLoved = !this.isLoved;
  }

  routerHome() {
    this.router.navigate(['/home']);
  }

  irParaLogs() {
    this.router.navigate(['/logs']);
  }

}
