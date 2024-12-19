import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  userId:string = '';

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

  putData() {
    this.http.get<any>('http://localhost:3000/users/11')
    .subscribe( 
      {
        next: (data)=>{
          data.name = 'Abd Allah';
          data.email = 'abdAllah@gmail.com';
          
          this.http.put('http://localhost:3000/users/11',data)
          .subscribe(           
            {
              next: (response) => {
                console.log('User has been updated : ',response);
              },
              error: (error) => {
                console.log('Error : ',error);
              }
            }
          );
        } ,
        error:  (error) => {
          console.log('Error : ',error);
        } ,
      }
    );
  }

  deleteData() {
    this.http.delete(`http://localhost:3000/users/${this.userId}`)
    .subscribe(
      {
        next: (response) => {
          console.log('User has been deleted : ',response);
        },
        error: (error) => {
          console.log('Error : ',error);
        }
      }
    );
  }
}
