import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  standalone: true,
  imports: [],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.scss'
})
export class CardProductoComponent {
  @Input() pathSrc: string | null = null;
  @Input() productName: string | null  = null;
  @Input() productDescription: string | null = null;
  @Input() productPrice: string | null = null;
  @Input() productLinkTitle: string | null = null;

}
