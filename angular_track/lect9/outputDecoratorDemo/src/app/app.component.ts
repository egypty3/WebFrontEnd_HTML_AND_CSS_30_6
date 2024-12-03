import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { ListViewerChildComponent } from "./list-viewer-child/list-viewer-child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, ListViewerChildComponent,
     CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = '';

  receiveChildEvent(eventData: string){
    this.message = eventData;
  }

  itemsArr: string[] = ['item1', 'item2', 'item3', 'item4', 'item5'];

  addItem(){
    const newItem = 'item' + (this.itemsArr.length + 1);
    this.itemsArr.push(newItem);
  }

  deleteItem(index: number){
    if (index >= 0 && index < this.itemsArr.length)
      this.itemsArr.splice(index, 1);
  }
}
