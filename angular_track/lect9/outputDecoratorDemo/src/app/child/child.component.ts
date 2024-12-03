import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() myEvent = new EventEmitter<string>();
  
  emitEvent(){
    this.myEvent.emit('Data from Child');
  }
}
