export default class FormError {
  hasErrors: boolean;

  errorMessage: string | null;

  statusCode: number;

  fields: any;

  constructor(message: string | null, fields?: any) {
    this.hasErrors = message!== null;
    this.errorMessage = message;
    this.statusCode = 400;
    if (fields) {
      this.fields = fields;
    }
  }
}
