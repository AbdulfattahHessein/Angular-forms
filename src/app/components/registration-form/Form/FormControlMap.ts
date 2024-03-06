import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type FormControlMap<T> = {
  [K in keyof T]: T[K] extends
    | string
    | number
    | boolean
    | null
    | undefined
    | (string | number | boolean | null | undefined)[]
    ? FormControl<T[K]> // Type guard for primitive types
    : T[K] extends (infer U extends object)[]
    ? FormArray<FormGroup<FormControlMap<U>>> // Type guard for arrays of objects
    : T[K] extends object
    ? FormGroup<FormControlMap<T[K]>> // Type guard for nested objects
    : never;
};
// export type FormMap<T> = FormGroup<{
//   [K in keyof T]: T[K] extends
//     | string
//     | number
//     | boolean
//     | null
//     | undefined
//     | (string | number | boolean | null | undefined)[]
//     ? FormControl<T[K]> // Type guard for primitive types
//     : T[K] extends (infer U extends { [key: string]: any })[]
//     ? FormArray<FormGroup<FormControlMap<U>>> // Type guard for arrays of objects
//     : T[K] extends { [key: string]: any }
//     ? FormGroup<FormControlMap<T[K]>> // Type guard for nested objects
//     : never;
// }>;

