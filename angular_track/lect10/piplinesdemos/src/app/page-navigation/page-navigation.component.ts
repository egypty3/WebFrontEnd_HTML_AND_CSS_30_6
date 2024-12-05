import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.css'
})
export class PageNavigationComponent {
  products:{name:string, imageUrl:string}[] = 
  [
    {
      name: 'HTML, CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
      imageUrl: '/assets/html-css-tutorials.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: '/assets/JS_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: '/assets/TypeScript_Course.jpg',
    },
    {
      name: 'Mastering React With Interview Questions,eStore Project',
      imageUrl: '/assets/React_Course.png',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: '/assets/RDBMS thumbnail.png',
    },
    {
      name: 'Mastering Angular with Marathon Interview Questions',
      imageUrl: '/assets/try03-small.jpg',
    },
    {
      name: 'NodeJS - Marathon Interview Questions Series',
      imageUrl: '/assets/NodeJS_Course.jpg',
    },
    {
      name: 'Python - Marathon Interview Questions Series',
      imageUrl: '/assets/Python_Course.jpg',
    },
  ];

  pageSize = 4;
  startIndex = 0;
  endIndex = this.pageSize;

  previousPage() {
    this.startIndex -= this.pageSize;
    this.endIndex -= this.pageSize;
  }
  nextPage() {
    this.startIndex += this.pageSize;
    this.endIndex += this.pageSize;
  }
}
