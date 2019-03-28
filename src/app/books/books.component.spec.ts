import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../shared/services/book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksComponent, AddBookComponent ],
      imports: [
        MatDividerModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [BookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',inject([BookService], (bookService: BookService) => {
    expect(component).toBeTruthy();
  }));
});
