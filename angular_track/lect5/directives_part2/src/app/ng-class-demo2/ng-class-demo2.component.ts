import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class-demo2.component.html',
  styleUrl: './ng-class-demo2.component.css'
})
export class NgClassDemo2Component {

  colorMode= 'lightMode';

  toggleMode()
  {
    if (this.colorMode == 'lightMode')
    {
      this.colorMode = 'darkMode';
    } else {
      this.colorMode = 'lightMode';
    }
  }

}
