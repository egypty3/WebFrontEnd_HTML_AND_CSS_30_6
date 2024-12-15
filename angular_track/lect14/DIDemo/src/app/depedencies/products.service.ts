import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 getNames():string[]{
   return ['Angluar','React','MongoDB','Python','TypeScript'];
 } 
}
