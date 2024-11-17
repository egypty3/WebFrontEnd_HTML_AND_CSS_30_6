import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-related-events',
  standalone: true,
  imports: [],
  templateUrl: './mouse-related-events.component.html',
  styleUrl: './mouse-related-events.component.css'
})
export class MouseRelatedEventsComponent {
  counter = 0;
  incr(){
    this.counter++;
  }
 
}
