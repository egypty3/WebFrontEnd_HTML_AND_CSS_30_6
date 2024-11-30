import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tracks:{id:number;name:string}[]= [
      {id:1, name: 'Javascript'},
      {id:2, name: 'Typescript'},
      {id:3, name: 'Angular'},
      {id:4, name: 'Figma'},
  ];
}
