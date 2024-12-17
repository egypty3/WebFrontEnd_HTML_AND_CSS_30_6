import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  postData(){

    var user = {
      id:11,
      name :'ABC',
      email:'abc@gmail.com'
    };

    // this.http.post('https://jsonplaceholder.typicode.com/users',user)
    this.http.post('http://localhost:3000/users',user)
    .subscribe(
      (response) => {
        console.log('User has been added : ',response);
    });
  }
}
