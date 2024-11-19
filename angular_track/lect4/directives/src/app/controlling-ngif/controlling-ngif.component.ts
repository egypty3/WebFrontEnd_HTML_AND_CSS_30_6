import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-controlling-ngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controlling-ngif.component.html',
  styleUrl: './controlling-ngif.component.css'
})
export class ControllingNgifComponent {
  showDiv = false;
}
