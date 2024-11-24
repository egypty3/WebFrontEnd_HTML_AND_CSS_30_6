import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container-example.component.html',
  styleUrl: './ng-container-example.component.css'
})
export class NgContainerExampleComponent {
  subjectList =[
    {
      subCode : 101,
      name:'JavaScript'
    },
    {
      subCode : 102,
      name:'Angular'
    },
    {
      subCode : 103,
      name:'React'
    },
    {
      subCode : 104,
      name:'Vue'
    },
    {      
      name:'Node'
    },
    {      
      name:'Express'
    }
  ]
}
