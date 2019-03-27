import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponent } from './add-book.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        BrowserAnimationsModule,
        BrowserModule],
      declarations: [ AddBookComponent ],
      providers: [
        FormBuilder
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AddBookComponent);
      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it('should set submitted to true', async(() => {
    fixture.detectChanges();
    component.addBook();
    expect(component.submitted).toBeTruthy();
  }));

  it('should call the addBook method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'addBook');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
  }));

  it('form should be invalid', async(() => {
    component.addBookForm.controls['title'].setValue('');
    component.addBookForm.controls['category'].setValue('');
    component.addBookForm.controls['description'].setValue('');
    expect(component.addBookForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.addBookForm.controls['title'].setValue('Title book');
    component.addBookForm.controls['category'].setValue('Sport');
    component.addBookForm.controls['description'].setValue('description');
    expect(component.addBookForm.valid).toBeTruthy();
  }));
});
