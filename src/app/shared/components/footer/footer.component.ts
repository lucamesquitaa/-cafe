import { Component } from '@angular/core';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent extends ComponentBase{

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
