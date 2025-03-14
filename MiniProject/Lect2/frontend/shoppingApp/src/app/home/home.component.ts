import { Component,ViewChild } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';

// import { ProductsService } from '../home/services/products.service'; // Adjust the path as necessary

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;


  // constructor(private productService: ProductsService) {}

  // onSelectSubCategory(subCategoryId: number): void {
  //   this.getAllProducts('subCategoryId=' + subCategoryId);
  // }

  onSelectCategory(categoryId: number): void {
    const query = 'mainCategoryId=' + categoryId;
    console.log(query);
    this.productsComponent.getAllProducts(query);
    //this.getAllProducts('mainCategoryId=' + categoryId);
  }

  // getAllProducts(query: string): void {
  //   this.productService.getAllProducts(query).subscribe(products => {
  //     // Handle the products here
  //     console.log(products);
  //   });
  // }
}
