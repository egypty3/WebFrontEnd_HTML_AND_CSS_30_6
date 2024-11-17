import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-events',
  standalone: true,
  imports: [],
  templateUrl: './keyboard-events.component.html',
  styleUrl: './keyboard-events.component.css'
})
export class KeyboardEventsComponent {
  msg:string='';
  onSelect()
  {
    this.msg = 'select event is triggered';
  }

  keyPressed(e:any)
  {
    // this.msg =e.target.value;
    if (e.shiftKey && e.key == 'N')
    {
      this.msg = e.key;
    }
    
  }
}
