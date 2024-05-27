
export interface FormErrors {
  hasErrors: boolean;
  errorMessage: string | null;
  fields?: any;
}

export interface SigninFormErrors extends FormErrors {
  fields: {
    email: string | null;
  }
}
