import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookList: Book[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToList($event) {
    if ($event) {
      this.bookList = this.bookList.concat($event);
    }
  }

}
