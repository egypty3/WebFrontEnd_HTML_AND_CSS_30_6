import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [HomeComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
    
  ] 
})
export class ProductsModule {
  
}
