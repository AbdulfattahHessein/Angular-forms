import { Component, OnInit } from '@angular/core';
import { createForm } from '../../helpers/TypedForm/CreateForm';
import { TypedForm } from '../../helpers/TypedForm/TypedForm';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ExtractFormControl } from 'src/app/helpers/ExtractFormValue';
import { IRegistrationRequest, ITestType } from './Form/IRegistrationForm';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  test = new FormControl(0, Validators.required);
  FormNames = {
    textInput: 'textInput',
    numberInput: 'numberInput',
    emailInput: 'emailInput',
    passwordInput: 'passwordInput',
    checkbox: 'checkbox',
    radio: 'radio',
    select: 'checkbox',
  };

  constructor(private formBuilder: FormBuilder) {}

  formGroup: TypedForm<IRegistrationRequest>;

  InitializeForm() {
    this.formGroup = createForm<IRegistrationRequest>({
      textInput: new FormControl('', Validators.required),
      checkbox: new FormControl(true),
      emailInput: new FormControl('', [Validators.required]),
      numberInput: new FormControl(0),
      passwordInput: new FormControl('', Validators.required),
      radio: new FormControl('Option 1'),
      multiSelect: new FormControl([1, 2, 3, 4, 5]),
      select: new FormControl(0, Validators.required),
    });
    return this.formGroup;
  }
  FillFormWithOldValue() {
    setTimeout(() => {
      let oldFormValue: IRegistrationRequest = {
        textInput: 'Text Input',
        numberInput: 0,
        emailInput: 'Email Input',
        passwordInput: 'Password Input',
        checkbox: true,
        radio: 'Option1',
        select: 2,
        multiSelect: [1, 2],
      };
      this.formGroup.patchValue(oldFormValue);
    }, 2000);
  }
  ngOnInit(): void {
    this.InitializeForm();
    this.FillFormWithOldValue();
    setTimeout(() => {
      console.log(this.formGroup.value);
    }, 2000);
  }

  onSubmit() {
    // if (this.formGroup.valid) {
    console.log('Form submitted successfully!');
    console.log('Form value:', this.formGroup.value);
    // } else {
    //   console.log('Form is invalid!');
    // }
  }
}
