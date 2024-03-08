export interface IRegistrationRequest {
  textInput?: string;
  numberInput: number;
  emailInput: string;
  passwordInput: string;
  checkbox: boolean;
  radio: string;
  select: number;
  multiSelect: number[];
  nestedObject: NestedObject;
  nestedObjectArr: {
    name: string;
  }[];
  optionalTextInput?: string;
}
export interface NestedObject {
  name: string;
}
