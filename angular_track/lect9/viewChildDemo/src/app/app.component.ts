import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(ChildComponent) childComponent?: ChildComponent;
  @ViewChild('btnInc') btnRef?: ElementRef<HTMLButtonElement>;

  incrementChildCounter(){
    this.childComponent?.incrementCounter();
  }

  ngAfterViewInit(){
    if (this.btnRef?.nativeElement)
      this.btnRef.nativeElement.innerHTML = "Counter ++";
  }
}
