import { Component } from '@angular/core';

@Component({
  selector: 'faysal',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  name: string = 'Faysal Farouk';
  age: number = 50;
}
