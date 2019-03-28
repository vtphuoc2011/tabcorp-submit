import { ValidatorFn, AbstractControl } from '@angular/forms';
import { isString } from 'util';

export function trimValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return !control.value || (isString(control.value) && control.value.trim() == "") ?
      { "required": true } :
      null;
  };
}