import { FormGroup } from '@angular/forms';
import { TypedFormControl } from './TypedFormControl';
import { TypedForm } from './TypedForm';

/**
 * Creates a new form based on the provided TypedFormControl.
 *
 * @param {TypedFormControl<T>} form - The TypedFormControl used to create the form.
 * @return {TypedForm<T>} A new TypedForm created from the TypedFormControl.
 */
export function createForm<T>(form: TypedFormControl<T>): TypedForm<T> {
  return new FormGroup<TypedFormControl<T>>(form);
}
