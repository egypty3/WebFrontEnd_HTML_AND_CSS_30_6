import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  
  employees = [
    {id:1,name:'John'},
    {id:2,name:'Smith'},
    {id:3,name:'Peter'},
    {id:4,name:'Sam'},
    {id:5,name:'Mary'},
    {id:6,name:'Nancy'},
    {id:7,name:'Tom'},    
  ];
  
  id:string='';
  name:string='';
 
  constructor(private route:ActivatedRoute){
    const params = this.route.snapshot.params;
    this.id = params['id'];
    this.name = params['name']; 
   
  }
}
