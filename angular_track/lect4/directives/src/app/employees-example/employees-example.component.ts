import { CommonModule } from '@angular/common';
import { Component,signal } from '@angular/core';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-employees-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees-example.component.html',
  styleUrl: './employees-example.component.css'
})
export class EmployeesExampleComponent {
  showEmployees: boolean = true;
  employees = signal<empInterface[]> ([
    { id: 1, name: 'John', role: 'Developer' },
    { id: 2, name: 'Doe', role: 'Tester' },
    { id: 3, name: 'Jane', role: 'Manager' },
    { id: 4, name: 'Smith', role: 'Designer' },
    { id: 5, name: 'Emily', role: 'Developer' }
  ]);
}
