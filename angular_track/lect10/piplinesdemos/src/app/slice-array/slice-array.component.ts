import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-array',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slice-array.component.html',
  styleUrl: './slice-array.component.css'
})
export class SliceArrayComponent {
  sliceArray:string[] = ['ItemA', 'ItemB', 'ItemC', 'ItemD', 
        'ItemE', 'ItemF', 'ItemG', 'ItemH', 'ItemI', 'ItemJ'];
}
