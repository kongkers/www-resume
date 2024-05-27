import {FormErrors} from '../../types/errors.js';

export default class BadRequest extends Error {
  status: number;

  data: FormErrors;

  constructor(public message: any) {
    super();
    this.data = {
      hasErrors: true,
      errorMessage: message,
    };
    this.status = 400;
  }
}
