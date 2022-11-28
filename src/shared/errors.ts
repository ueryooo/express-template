import HttpStatusCodes from "http-status-codes";

export abstract class CustomError extends Error {
  public readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.HttpStatus = httpStatus;
  }
}

export class InternalServerError extends CustomError {
  public static readonly Msg = "Internal Server Error";
  constructor() {
    super(InternalServerError.Msg, HttpStatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export class BodyMissingError extends CustomError {
  public static readonly Msg = "is missing";
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(param: string) {
    super(param + BodyMissingError.Msg, BodyMissingError.HttpStatus);
  }
}
