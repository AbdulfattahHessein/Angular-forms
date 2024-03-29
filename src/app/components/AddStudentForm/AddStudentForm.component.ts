import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from 'src/app/guards/canDeactivate.guard';
import {
  TypedForm,
  createForm,
} from 'src/app/helpers/TypedForm/MappedFormGroup';
import { nameof } from 'src/app/helpers/nameof/nameof';

@Component({
  selector: 'app-AddStudentForm',
  templateUrl: './AddStudentForm.component.html',
  styleUrls: ['./AddStudentForm.component.css'],
})
export class AddStudentFormComponent
  implements OnInit, AfterViewInit, IDeactivateComponent
{
  @ViewChild('selectElement') selectElement: ElementRef<HTMLSelectElement>;

  AddStudentForm: TypedForm<AddStudentRequest>;
  FormNames = nameof<AddStudentRequest>();
  FormAddressNames = nameof<IAddress>();
  FormSkillNames = nameof<ISkill>();
  form = createForm<AddStudentRequest>({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(12)]),
    address: new FormGroup({
      city: new FormControl(''),
      country: new FormControl(''),
    }),
    skills: new FormArray([
      new FormGroup({ name: new FormControl(''), level: new FormControl(0) }),
    ]),
    favFoods: new FormControl([]),
  });

  removeFavFood(favFood: number) {
    this.AddStudentForm.controls.favFoods.value.splice(
      this.AddStudentForm.controls.favFoods.value.indexOf(favFood),
      1
    );
  }
  addFavFood(favFood: number) {
    this.AddStudentForm.controls.favFoods.value.push(favFood);
  }
  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    //#region Old way
    // let AddStudentForm2 = formBuilder.group<IAddStudentForm>({
    //   name: ['', Validators.required],
    //   age: new FormControl(0),
    //   address: this.formBuilder.group({
    //     city: new FormControl(''),
    //     country: new FormControl(''),
    //   }),
    // });
    // AddStudentForm2.value;
    //#endregion

    this.AddStudentForm = createForm<AddStudentRequest>({
      name: new FormControl('', [Validators.required]),
      age: new FormControl(0, [Validators.required, Validators.min(12)]),
      address: new FormGroup({
        city: new FormControl(''),
        country: new FormControl(''),
      }),
      skills: new FormArray([
        new FormGroup({
          name: new FormControl('Football'),
          level: new FormControl(99),
        }),
        new FormGroup({
          name: new FormControl('hadeel'),
          level: new FormControl(99),
        }),
      ]),
      favFoods: new FormControl([], [Validators.required]),
    });
    this.AddStudentForm.controls.address.controls.city.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
  }
  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    if (this.AddStudentForm.dirty) {
      return confirm('Are you sure you want to leave?');
    }
    return true;
  }
  ngAfterViewInit(): void {
    this.selectElement.nativeElement.value = '3';
    this.selectElement.nativeElement.dispatchEvent(new Event('change'));
  }
  onSelectChange(value: any) {
    console.log('event fired', value);
  }
  addSkill() {
    this.AddStudentForm.controls.skills.push(
      new FormGroup({
        name: new FormControl('New Skill'),
        level: new FormControl(10),
      })
    );
  }
  /**
   * A function to remove a skill at the specified index.
   *
   * @param {number} skillIndex - the index of the skill to be removed
   * @return {void}
   */
  removeSkill(skillIndex: number) {
    this.AddStudentForm.controls.skills.removeAt(skillIndex);
  }
  ngOnInit(): void {
    this.AddStudentForm.controls.favFoods.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.pathOldValues();
  }
  pathOldValues() {
    let oldValue = {
      name: 'Mohsen',
      age: 20,
      address: {
        city: 'Cairo',
        country: 'Egypt',
      },
      skills: [
        {
          name: 'basketball',
          level: 99,
        },
      ],
      favFoods: [1, 2],
    };
    this.AddStudentForm.patchValue(oldValue);
    // this.AddStudentForm.setValue(oldValue);
  }

  onSubmit() {
    if (this.AddStudentForm.valid) {
      console.log(this.AddStudentForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
  Required(control: AbstractControl) {
    return control.errors?.['required'];
  }
}

interface AddStudentRequest {
  name: string;
  age: number;
  address: IAddress;
  skills: ISkill[];
  favFoods: number[];
}
interface IAddress {
  city: string;
  country: string;
}
interface ISkill {
  name: string;
  level: number;
}

type AddStudentForm = FormGroup<{
  name: FormControl<string>;
  age: FormControl<number>;
  address: FormGroup<{
    city: FormControl<string>;
    country: FormControl<string>;
  }>;
  // skills: FormArray<
  //   FormGroup<{ name: FormControl<string>; level: FormControl<number> }>
  // >;
  // favFoods: FormControl<number[]>;
}>;

type AddStudentFormValue = ReturnType<AddStudentForm['getRawValue']>;
