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
import { IRegistrationRequest } from './Form/IRegistrationForm';
import { nameof } from 'src/app/helpers/nameof/nameof';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  FormNames = nameof<IRegistrationRequest>();
  FormNamesFn = nameof<IRegistrationRequest>;

  formGroup: TypedForm<IRegistrationRequest>;

  constructor(private formBuilder: FormBuilder) {}

  InitializeForm() {
    this.formGroup = createForm<IRegistrationRequest>({
      textInput: new FormControl('', Validators.required),
      checkbox: new FormControl(true),
      emailInput: new FormControl('', [Validators.required]),
      numberInput: new FormControl(0),
      passwordInput: new FormControl('', Validators.required),
      radio: new FormControl('Option 1'),
      multiSelect: new FormControl([1]),
      select: new FormControl(0, Validators.required),
      nestedObject: new FormGroup({
        name: new FormControl('', Validators.required),
      }),
    });
  }
  patchFormData() {
    let oldFormValue: IRegistrationRequest = {
      textInput: 'Taha',
      numberInput: 0,
      emailInput: 'Abdulfattah@gmail.com',
      passwordInput: 'Password Input',
      checkbox: true,
      radio: 'Option1',
      select: 2,
      multiSelect: [1, 2],
      nestedObject: {
        name: 'Nested Object',
      },
    };
    this.formGroup.patchValue(oldFormValue);
  }
  ngOnInit(): void {
    this.InitializeForm();

    this.patchFormData();

    setTimeout(() => {
      this.formGroup.patchValue({ textInput: 'Ya Hala' });
    }, 2000);

    console.log(nameof<IRegistrationRequest>().passwordInput); // test nameof function
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
