/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AxiosResponse } from "axios";

export class SDKError extends Error {
  statusCode: number;
  body: string;
  rawResponse: AxiosResponse;

  constructor(
    message: string,
    statusCode: number,
    body: string,
    rawResponse: AxiosResponse,
  ) {
    let bodyString = "";
    if (body?.length > 0) {
      bodyString = `\n${body}`;
    }

    super(`${message}: Status ${statusCode}${bodyString}`);
    this.statusCode = statusCode;
    this.body = body;
    this.rawResponse = rawResponse;

    this.name = "SDKError";
    Object.setPrototypeOf(this, SDKError.prototype);
  }
}
