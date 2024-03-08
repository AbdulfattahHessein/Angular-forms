import { FormArray, FormControl, FormGroup } from '@angular/forms';

type PrimitiveType = string | number | boolean | null | undefined;
type KeyValueObject = { [key: string]: any };

export type MappedFormGroup<T extends KeyValueObject> = {
  [K in keyof T]: T[K] extends PrimitiveType | PrimitiveType[]
    ? FormControl<T[K]> // Form control for primitive types
    : T[K] extends (infer U extends KeyValueObject)[]
    ? FormArray<FormGroup<MappedFormGroup<U>>> // Form array for arrays of objects
    : T[K] extends infer U extends KeyValueObject
    ? FormGroup<MappedFormGroup<U>> // Form group for nested objects
    : never;
};

/**
 * A form based on the TypedFormControl.
 */
export type TypedForm<T> = FormGroup<MappedFormGroup<T>>;

/**
 * Creates a new form based on the provided TypedFormControl.
 *
 * @param {MappedFormGroup<T>} form - The TypedFormControl used to create the form.
 * @return {TypedForm<T>} A new TypedForm created from the TypedFormControl.
 */
export function createForm<T extends KeyValueObject>(
  form: MappedFormGroup<T>
): TypedForm<T> {
  return new FormGroup<MappedFormGroup<T>>(form);
}
