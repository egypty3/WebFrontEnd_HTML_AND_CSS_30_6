import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './dependencies/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  providers: [EmployeeService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  employees:any[];
  
  empId:number =0;
  emp:any;

  constructor(private empService:EmployeeService){
    this.employees = this.empService.getEmployees();
  }

  showDetails(employeeId:number){
    this.empId = employeeId;
    this.emp = this.empService.getEmployee(employeeId);
  }
}
