import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class-demo1.component.html',
  styleUrl: './ng-class-demo1.component.css'
})
export class NgClassDemo1Component {

  hasText:boolean = false;

  textInput(e:any){
    this.hasText = e.target.value != '';
  }
}
