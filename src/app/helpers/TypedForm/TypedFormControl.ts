import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type TypedFormControl<T> = {
  [K in keyof T]: T[K] extends
    | string
    | number
    | boolean
    | null
    | undefined
    | (string | number | boolean | null | undefined)[]
    ? FormControl<T[K]> // Type guard for primitive types //[T[K], ValidatorFn[]]
    : T[K] extends (infer U extends { [key: string]: any })[]
    ? FormArray<FormGroup<TypedFormControl<U>>> // Type guard for arrays of objects
    : T[K] extends { [key: string]: any }
    ? FormGroup<TypedFormControl<T[K]>> // Type guard for nested objects
    : never;
};
