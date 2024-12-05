import { state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-more-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-pipes.component.html',
  styleUrl: './more-pipes.component.css'
})
export class MorePipesComponent {
  employees = [
    {name: 'john', state : 'california',salary: 50000},
    {name: 'smith', state : 'texas',salary: 60000},
    {name: 'peter', state : 'california',salary: 70000},
    {name: 'sam', state : 'texas',salary: 80000},
    {name: 'david', state : 'california',salary: 90000},
  ]
}
