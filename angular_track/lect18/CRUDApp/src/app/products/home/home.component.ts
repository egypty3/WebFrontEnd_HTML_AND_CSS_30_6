import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.productService.getProducts().subscribe(
      (data)=>{
        this.products = data;
    });
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      {
        next: () => {
          // this.getProducts();
          this.products = this.products.filter((product) => product.id != id);

        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
}
