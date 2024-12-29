import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  newProdutForm:Product = {
    id: 0,
    name: '',
    price: 0
  }
  constructor(private productService:ProductService,
    private router:Router
  ) { }

  createProduct() {
   this.productService.createProduct(this.newProdutForm).subscribe(
      {
        next: () => {
          this.router.navigate(['/products/home']);          
        },
        error: (err) => {
          console.log(err);
        }
      }
   );
  }
}
