import { AbstractControl, AsyncValidator, ValidationErrors, FormGroup } from '@angular/forms';

export class CustomValidators {

  static checkPass(control: AbstractControl): Promise<ValidationErrors|null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === '1234') {
          return resolve(null);
        }else {
          return resolve({invalidPass: true});
        }
      }, 2000);
    });
  }

  static checkConfirmPass(control: AbstractControl): ValidationErrors|null {
    const new_pass = control.get('new_pass').value;
    const confirm_pass = control.get('confirm_pass').value;
    if (new_pass !== confirm_pass) {
      return { confirmMustMatch: true };
    }else {
      return null;
    }
  }
}
