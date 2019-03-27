import { Component, OnInit, NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take, map, filter} from 'rxjs/operators';
import { Book } from '../shared/book';
import { isString } from 'util';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBookForm = new FormGroup({
    title : new FormControl('', [
      trimValidator()
    ]),
    category : new FormControl('', [
      Validators.required
    ]),
    description : new FormControl('', [
      trimValidator()
    ]),
  });

  categories = ['Drama', 'Comedy', 'Sport'];

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @Output() newBookAddedTriggered: EventEmitter<Book> = new EventEmitter();
  constructor(private ngZone: NgZone) { }

  ngOnInit() {}

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

export function trimValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return !control.value || (isString(control.value) && control.value.trim() == "") ?
      { "required": true } :
      null;
  };
}
