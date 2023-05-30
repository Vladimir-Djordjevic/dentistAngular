import { FormControl } from '@angular/forms';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkErrors',
})
export class CheckErrorsPipe implements PipeTransform {
  transform(formControl: FormControl, error: string): boolean {
    return formControl.dirty && formControl.errors?.[error];
  }
}
