import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-is-authorized-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './is-authorized-example.component.html',
  styleUrl: './is-authorized-example.component.css'
})
export class IsAuthorizedExampleComponent {
  isAuthorized:boolean = false;
  
}
