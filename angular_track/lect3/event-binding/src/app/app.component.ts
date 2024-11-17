import { Component } from '@angular/core';

import { VerySimpleBindingComponent } from './very-simple-binding/very-simple-binding.component';
import { MouseRelatedEventsComponent } from './mouse-related-events/mouse-related-events.component';
import { KeyboardEventsComponent } from './keyboard-events/keyboard-events.component';
// import  {KeyboardEventsComponent} from './keyboard-events/keyboard-events.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerySimpleBindingComponent,
            MouseRelatedEventsComponent,
           KeyboardEventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-binding';
}
