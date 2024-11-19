import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-example1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif-example1.component.html',
  styleUrl: './ngif-example1.component.css'
})
export class NgifExample1Component {
  num = -4;
}
