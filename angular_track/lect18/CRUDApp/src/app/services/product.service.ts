import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Observable } from 'rxjs/internal/Observable';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.url);
  }

  createProduct(newProduct: Product): Observable<Product> {
    return this.getProducts().pipe(
      map(products => {
        newProduct.id = products[products.length - 1].id + 1;
        return newProduct;
      })
      ,
      switchMap(product => this.http.post<Product>(this.url, product))
    );
  }
  getProductById(id:number){
    return this.http.get<Product>(`${this.url}/${id}`);
  }
  updateProduct(data:Product){
    return this.http.put(`${this.url}/${data.id}`,data);
  }
  deleteProduct(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
