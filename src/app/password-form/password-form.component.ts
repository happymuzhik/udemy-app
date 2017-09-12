import { CustomValidators } from './custom.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {

  form = new FormGroup({
    old_pass: new FormControl('', Validators.required,  CustomValidators.checkPass),
    new_pass: new FormControl('', Validators.required),
    confirm_pass: new FormControl('', [Validators.required])
  }, CustomValidators.checkConfirmPass);

  constructor() { }

  get old_pass(){
    return this.form.get('old_pass');
  }

  get new_pass(){
    return this.form.get('new_pass');
  }

  get confirm_pass(){
    return this.form.get('confirm_pass');
  }

  submit(){
    console.log(this.form);
  }

}
