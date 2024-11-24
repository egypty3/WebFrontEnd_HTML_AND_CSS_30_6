import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgstyleExampleComponent } from "./ngstyle-example/ngstyle-example.component";
import { NgContainerExampleComponent } from "./ng-container-example/ng-container-example.component";
import { IsAuthorizedExampleComponent } from "./is-authorized-example/is-authorized-example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgstyleExampleComponent, NgContainerExampleComponent, IsAuthorizedExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives-part3';
}
