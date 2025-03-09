import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = 'https://localhost:7269/api/Products';

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(
      () => new Error('Error! something went wrong.')
    );
  }
}
