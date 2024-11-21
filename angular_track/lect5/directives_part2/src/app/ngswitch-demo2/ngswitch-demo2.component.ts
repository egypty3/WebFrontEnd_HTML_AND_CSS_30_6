import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngswitch-demo2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ngswitch-demo2.component.html',
  styleUrl: './ngswitch-demo2.component.css'
})
export class NgswitchDemo2Component {
  age: number = 0;
  isEligible: boolean = false;

  checkEligibility() {
    this.isEligible = this.age >= 18 ? true : false;
  }
}
