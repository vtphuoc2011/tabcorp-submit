import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookList: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((res:any)=>{
      if(res && res.data && res.data.length > 0) {
        res.data.map(item => {
          const book: Book = {
            title: item.title,
            description: item.description,
            category: item.category
          }
          this.bookList.push(book);
          this.bookList = [...this.bookList];
        })
      }
  });
  }

  addToList($event) {
    if ($event) {
      this.bookService.addBooks($event).subscribe((res:any) => {
        if(res && res.data) {
          const book: Book = {
            title: res.data.title,
            description: res.data.description,
            category: res.data.category
          }
          this.bookList = [book,...this.bookList];
        }
      });
    }
  }

}
