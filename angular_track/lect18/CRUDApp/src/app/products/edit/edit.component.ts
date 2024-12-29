import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent  implements OnInit {

   updateProdutForm:Product = {
      id: 0,
      name: '',
      price: 0
    }

    constructor(private productService:ProductService,
      private router:Router,
      private route:ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(
        (params) => {
          console.log(Number(params.get('id')));
          this.getProductById(Number(params.get('id')));
        }
      );
    }

    getProductById(id:number){
      this.productService.getProductById(id).subscribe(
        (data) => {
          this.updateProdutForm = data;
        }
      );
    }

    updateProduct() {
      this.productService.updateProduct(this.updateProdutForm).subscribe(
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
