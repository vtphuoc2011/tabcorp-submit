import { Component, OnInit, NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, NgForm } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take, map, filter} from 'rxjs/operators';
import { Book } from '../shared/models/book';
import { trimValidator } from '../shared/validators/custom-validator';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  categories = ['Drama', 'Comedy', 'Sport'];
  defaultBook: Book = {
    title: '',
    category: '',
    description: ''
  };
  submitted = false;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('frm') form: NgForm;
  @Output() newBookAddedTriggered: EventEmitter<Book> = new EventEmitter();
  constructor(private ngZone: NgZone) {
    this.createForm();
  }

  ngOnInit() {}

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  createForm(): void {
    this.addBookForm = new FormGroup({
      title : new FormControl(this.defaultBook.title, [
        trimValidator()
      ]),
      category : new FormControl(this.defaultBook.category, [
        Validators.required
      ]),
      description : new FormControl(this.defaultBook.description, [
        trimValidator()
      ]),
    });
  }

  addBook() {
    this.submitted = true;
    const newBook: Book = {
      title: this.addBookForm.value.title.trim(),
      category: this.addBookForm.value.category,
      description: this.addBookForm.value.description.trim(),
    };
    this.newBookAddedTriggered.emit(newBook);
    this.form.resetForm();
    this.addBookForm.reset();
  }

}

