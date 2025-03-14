import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';
// import { ProductsService } from './home/services/products.service'; // Adjust the path as necessary

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, HomeModule, AppRoutingModule],
  providers: [
    // ProductsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
