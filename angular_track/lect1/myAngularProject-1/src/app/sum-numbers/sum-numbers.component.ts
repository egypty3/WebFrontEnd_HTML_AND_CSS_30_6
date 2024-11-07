import { Component } from '@angular/core';

@Component({
  selector: 'app-sum-numbers',
  standalone: true,
  imports: [],
  templateUrl: './sum-numbers.component.html',
  styleUrl: './sum-numbers.component.css'
})
export class SumNumbersComponent {
  a = 10;
  b = 5;
  ans = this.a + this.b;
}
