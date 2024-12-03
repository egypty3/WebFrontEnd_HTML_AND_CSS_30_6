import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-viewer-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-viewer-child.component.html',
  styleUrl: './list-viewer-child.component.css'
})
export class ListViewerChildComponent {
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index:number) {
    this.itemDeleted.emit(index);
  }
}
