import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/pages/interfaces/producto';

@Component({
  selector: 'app-card.components',
  templateUrl: './card.components.component.html',
  styles: [
  ]
})
export class CardComponentsComponent {
  @Input ()
  producto: Producto|undefined;
  constructor() {

  }
}
