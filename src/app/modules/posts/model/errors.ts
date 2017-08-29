import { Response } from "@angular/http"

export class GeneralError {
  constructor(public originalError: Response) {

  }

  public get message() {
    return this.originalError.statusText || "Unknown Error";
  }

  toString(): string {
    return "General Error - " + this.message;
  }
}

export class NotFoundError extends GeneralError{

  public get message() {
    return "Item not found";
  }
}
