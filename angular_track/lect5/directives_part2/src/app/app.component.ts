import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgswitchDemo1Component } from './ngswitch-demo1/ngswitch-demo1.component';
import { NgswitchDemo2Component } from "./ngswitch-demo2/ngswitch-demo2.component";
import { NgClassDemo1Component } from "./ng-class-demo1/ng-class-demo1.component";
import { NgClassDemo2Component } from './ng-class-demo2/ng-class-demo2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgswitchDemo1Component,
     NgswitchDemo2Component, NgClassDemo1Component,NgClassDemo2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives_part2';
}
