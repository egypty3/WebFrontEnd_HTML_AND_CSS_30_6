import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgifExample1Component } from './ngif-example1/ngif-example1.component';
import { ControllingNgifComponent } from "./controlling-ngif/controlling-ngif.component";
import { EmployeesExampleComponent } from "./employees-example/employees-example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgifExample1Component,
     ControllingNgifComponent, EmployeesExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
}
