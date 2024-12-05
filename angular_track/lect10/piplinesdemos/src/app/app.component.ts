import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateAndUppercasePipelinesComponent } from "./date-and-uppercase-pipelines/date-and-uppercase-pipelines.component";
import { MorePipesComponent } from "./more-pipes/more-pipes.component";
import { SliceArrayComponent } from "./slice-array/slice-array.component";
import { PageNavigationComponent } from "./page-navigation/page-navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DateAndUppercasePipelinesComponent, MorePipesComponent, SliceArrayComponent, PageNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piplinesdemos';
}
