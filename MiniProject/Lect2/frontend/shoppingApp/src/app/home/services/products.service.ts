import { Injectable } from '@angular/core';
import { Product } from '../types/products.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(query?: string): Observable<Product[]> {
    let url: string = 'https://localhost:7071/api/products';
    if (query) {
      url += '?' + query;
    }
    console.log(url);
    return this.httpClient.get<Product[]>(url);
  }
}
