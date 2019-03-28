import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';
import { Book } from '../models/book';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [BookService]
  }));

  it('should be created', inject([BookService], (bookService: BookService) => {
    expect(bookService).toBeTruthy();
  }));
});
