import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-and-uppercase-pipelines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-and-uppercase-pipelines.component.html',
  styleUrl: './date-and-uppercase-pipelines.component.css'
})
export class DateAndUppercasePipelinesComponent {
  showDt:Date = new Date();
}
