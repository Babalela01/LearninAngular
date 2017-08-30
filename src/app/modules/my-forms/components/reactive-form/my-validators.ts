import {AbstractControl, ValidationErrors} from "@angular/forms";

export class MyValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    //Cannot do asynchronouse stuff here
    if ((control.value as string).indexOf(' ') >= 0) {
      return {'cannotContainSpace': true}
    }
  }

  //Asynchronous validator (eg for http call)
  static mustBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value != 'unique') {
          resolve({mustBeUnique: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
