export interface IRegistrationRequest {
  textInput: string;
  numberInput: number;
  emailInput: string;
  passwordInput: string;
  checkbox: boolean;
  radio: string;
  select: number;
  multiSelect: number[];
  nestedObject: {
    name: string;
  };
}

export interface ITestType {
  name: string;
}
