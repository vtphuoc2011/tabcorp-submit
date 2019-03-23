import { Component, OnInit, NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { Book } from '../shared/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBookForm = new FormGroup({
    title : new FormControl('', [
      Validators.required
    ]),
    category : new FormControl('', [
      Validators.required
    ]),
    description : new FormControl('', [
      Validators.required
    ]),
  });

  categories = ['Drama', 'Comedy', 'Sport'];

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @Output() newBookAddedTriggered: EventEmitter<Book> = new EventEmitter();
  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  addBook(formDirective) {
    let newBook: Book = {
      title: this.addBookForm.value.title.trim(),
      category: this.addBookForm.value.category,
      description: this.addBookForm.value.description.trim(),
    };
    this.newBookAddedTriggered.emit(newBook);
    formDirective.resetForm();
    this.addBookForm.reset();
  }

}
