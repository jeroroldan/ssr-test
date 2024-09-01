import { Component } from '@angular/core';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CardProductoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  productos = [
    {
      pathSrc: '../assets/img/guitarra_01.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_02.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_03.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_04.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_05.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_06.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_07.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_09.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_10.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_11.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
    {
      pathSrc: '../assets/img/guitarra_12.jpg',
      productName: 'Lukather',
      productDescription:
        'Lorem, ipsum dolor sit. Nam labore voluptatibus sapiente. Iste veniam animi quidem voluptatum perspiciatis? Maxime adipisci illum unde soluta earum!',
      productPrice: '$299',
      productLinkTitle: 'Ver Producto',
    },
  ];
}
