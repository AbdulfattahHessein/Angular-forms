import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IRegistrationRequest, NestedObject } from './Form/IRegistrationForm';
import { nameof } from 'src/app/helpers/nameof/nameof';
import {
  TypedForm,
  createForm,
} from 'src/app/helpers/TypedForm/MappedFormGroup';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  FormNames = nameof<IRegistrationRequest>();
  NestedObjectNames = nameof<NestedObject>();
  FormNamesFn = nameof<IRegistrationRequest>;

  formGroup: TypedForm<IRegistrationRequest>;

  constructor(private formBuilder: FormBuilder) {
    this.InitializeForm();
  }

  InitializeForm() {
    this.formGroup = createForm<IRegistrationRequest>({
      textInput: new FormControl('Taha Hussein', Validators.required),
      checkbox: new FormControl(false),
      emailInput: new FormControl('', [Validators.required]),
      numberInput: new FormControl(0),
      passwordInput: new FormControl('', Validators.required),
      radio: new FormControl('Option1'),
      multiSelect: new FormControl(['Taha', 'Hussein']),
      select: new FormControl(1, Validators.required),
      nestedObject: new FormGroup({
        name: new FormControl('', Validators.required),
      }),
      nestedObjectArr: new FormArray([
        new FormGroup({ name: new FormControl('Mohsen') }),
        new FormGroup({ name: new FormControl('Hassan') }),
      ]),
    });
    console.log(this.formGroup.controls.multiSelect);
  }
  getFormArray() {
    return this.formGroup.controls.multiSelect;
  }
  patchFormData() {
    let oldFormValue: IRegistrationRequest = {
      textInput: 'Taha',
      numberInput: 500,
      emailInput: 'Abdulfattah@gmail.com',
      passwordInput: 'Password Input',
      checkbox: true,
      radio: 'Option1',
      select: 2,
      multiSelect: ['Taha', 'Hussein'],
      nestedObject: {
        name: 'Nested Object',
      },
      nestedObjectArr: [
        { name: 'Nested Object 1' },
        { name: 'Nested Object 2' },
      ],
    };
    this.formGroup.patchValue(oldFormValue);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.patchFormData();
    }, 500);

    setTimeout(() => {
      this.formGroup.patchValue({ textInput: 'Ya Hala' });
      this.formGroup.controls.nestedObjectArr.controls.push(
        new FormGroup({
          name: new FormControl('Hala Madrid'),
        })
      );
    }, 4000);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form submitted successfully!');
      console.log('Form value:', this.formGroup.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
