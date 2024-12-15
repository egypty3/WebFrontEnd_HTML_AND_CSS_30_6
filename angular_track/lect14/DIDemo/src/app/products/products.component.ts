import { Component } from '@angular/core';
import { ProductsService } from '../depedencies/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   names: string[] ;

   constructor( private productsService: ProductsService) { 
      this.names = productsService.getNames();
   }
}
