import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetCurrentUserDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetCurrentUserUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "login" })
  login: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class GetCurrentUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  user?: GetCurrentUserUser;

  @SpeakeasyMetadata()
  getCurrentUserDefaultApplicationJSONObject?: GetCurrentUserDefaultApplicationJSON;
}