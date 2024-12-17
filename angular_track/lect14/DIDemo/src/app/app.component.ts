import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  responseData: Observable<any> | undefined;
  loadData: boolean = false;

  constructor(private http: HttpClient) {
    
   }
   ngOnInit() {
    //  this.responseData =  this.http.get('https://jsonplaceholder.typicode.com/users');
    //  this.loadData = true;
  }
  getData() {
    this.responseData =  this.http.get('https://jsonplaceholder.typicode.com/users');
    this.loadData = true;
  }
}
