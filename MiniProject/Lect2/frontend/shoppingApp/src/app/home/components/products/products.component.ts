import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../types/products.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnChanges {
  @Input() query: string = '';
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['query']) {
      console.log('Query changed', this.query);
      this.getAllProducts(this.query);
    }
  }

  getAllProducts(query: string): void {
    this.productsService.getAllProducts(query).subscribe((products) => {
      this.products = products;
    });
  }
}
