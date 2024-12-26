import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [HomeComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    
  ] 
})
export class ProductsModule {
  
}
