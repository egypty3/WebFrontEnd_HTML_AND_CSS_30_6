import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngstyle-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ngstyle-example.component.html',
  styleUrl: './ngstyle-example.component.css'
})
export class NgstyleExampleComponent {
    //name:string = '';
    nm:string = '';
    em:string = '';

    emailIsValid:boolean = false;
    formSubmitted:boolean = false;

    checkEmailValidation(em:string){
      if (em.includes('@') && em.includes('.com'))
      {
        this.emailIsValid = true;
      }
      else
      {
        this.emailIsValid = false;
      }
    }
    showMessage(){
     if (this.nm && this.emailIsValid)
     {
      this.formSubmitted = true;
     }
     else
      {
        this.formSubmitted = false
      }
    }
}
