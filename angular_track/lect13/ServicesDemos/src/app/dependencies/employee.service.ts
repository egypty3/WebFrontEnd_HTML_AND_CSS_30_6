import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    {
      id:1,
      name:'Mohamed El Sharkawy',
      department:'IT',
      location : 'Alexandria',
      phone: '01111111111'
    },
    {
      id:2,
      name:'Ahmed Ali',
      department:'HR',
      location : 'Cairo',
      phone: '02222222222'
    },
    {
      id:3,
      name:'Khaled Mohamed',
      department:'Finance',
      location : 'Giza',
      phone: '03333333333'
    },
    {
      id:4,
      name:'Mona Ahmed',
      department:'IT',
      location : 'Alexandria',
      phone: '04444444444'
    },
  ]
  
  getEmployees(){
    return this.employees;
  }

  getEmployee(id:number){
    return this.employees.find(emp => emp.id == id);
  }
}
