import { Component } from '@angular/core';

@Component({
  selector: 'app-very-simple-binding',
  standalone: true,
  imports: [],
  templateUrl: './very-simple-binding.component.html',
  styleUrl: './very-simple-binding.component.css'
})
export class VerySimpleBindingComponent {
    display(msg:string)
    {
      alert('Hi I missed you !!! ' +  msg);
    }
}
