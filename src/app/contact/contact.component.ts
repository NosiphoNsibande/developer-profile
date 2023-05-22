import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  books: Book[] = [
    { title: 'Sara Jakes', id: 1, thumbImage: '../assets/books/book-sara.webp' },
    { title: 'Richard', id: 2, thumbImage: '../assets/books/book-succeed.jpg' },
    { title: 'God', id: 3, thumbImage: '../assets/books/book-god.jpg' },
    { title: 'Lessons', id: 4, thumbImage: '../assets/books/book-lessons.jpg' },
    { title: 'Fear', id: 5, thumbImage: '../assets/books/book-fear.jpg' },
    { title: 'Somizi', id: 6, thumbImage: '../assets/books/somizi-book.jpg' },
    { title: 'T.D Jakes', id: 7, thumbImage: '../assets/books/book-crushing.jpg' },
  ];
}

interface Book {
  title: string;
  id: number;
  thumbImage: string
}
