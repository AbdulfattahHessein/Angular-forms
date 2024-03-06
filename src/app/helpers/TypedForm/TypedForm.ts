import { FormGroup } from '@angular/forms';
import { TypedFormControl } from './TypedFormControl';

/**
 * A form based on the TypedFormControl.
 */
export type TypedForm<T> = FormGroup<TypedFormControl<T>>;
