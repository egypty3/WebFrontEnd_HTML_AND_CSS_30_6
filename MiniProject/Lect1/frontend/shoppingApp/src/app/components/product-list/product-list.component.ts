import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  
  constructor (private productService: ProductService) {}
  
  ngOnInit() {
    this.productService.getProducts()
    .subscribe(
      (data) => this.products = data);
  }

}