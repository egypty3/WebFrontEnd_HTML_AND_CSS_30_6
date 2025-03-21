import { Injectable } from '@angular/core';
import { Category } from '../types/category.type';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      'https://localhost:7071/api/Categories'
    );
  }
}
