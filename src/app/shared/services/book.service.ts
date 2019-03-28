import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(this.baseUrl + '/books');
  }

  addBooks(book: Book) {
    return this.httpClient.post(this.baseUrl + "/books/add", book)
  }
}
