import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngswitch-demo1.component.html',
  styleUrl: './ngswitch-demo1.component.css'
})
export class NgswitchDemo1Component {
  
  person = {
    name: 'John Doe',
    age: 25
  };
}
