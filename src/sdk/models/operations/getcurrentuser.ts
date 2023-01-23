import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCurrentUserUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class GetCurrentUserDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCurrentUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: GetCurrentUserUser;

  @SpeakeasyMetadata()
  getCurrentUserDefaultApplicationJSONObject?: GetCurrentUserDefaultApplicationJson;
}
