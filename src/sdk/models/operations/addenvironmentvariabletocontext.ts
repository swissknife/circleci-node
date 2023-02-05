import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AddEnvironmentVariableToContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
  contextId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=env-var-name" })
  envVarName: string;
}

export class AddEnvironmentVariableToContextRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export class AddEnvironmentVariableToContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddEnvironmentVariableToContextPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddEnvironmentVariableToContextRequestBody;
}

export class AddEnvironmentVariableToContextDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// AddEnvironmentVariableToContext200ApplicationJSONMessageResponse
/** 
 * message response
**/
export class AddEnvironmentVariableToContext200ApplicationJSONMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}

export class AddEnvironmentVariableToContext200ApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context_id" })
  contextId: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=variable" })
  variable: string;
}

export class AddEnvironmentVariableToContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addEnvironmentVariableToContext200ApplicationJSONAnyOf?: any;

  @SpeakeasyMetadata()
  addEnvironmentVariableToContextDefaultApplicationJSONObject?: AddEnvironmentVariableToContextDefaultApplicationJSON;
}