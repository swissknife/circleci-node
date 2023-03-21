import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class AddEnvironmentVariableToContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=context-id",
  })
  contextId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=env-var-name",
  })
  envVarName: string;
}

export class AddEnvironmentVariableToContextRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

export class AddEnvironmentVariableToContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddEnvironmentVariableToContextPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddEnvironmentVariableToContextRequestBody;
}

export class AddEnvironmentVariableToContextDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// AddEnvironmentVariableToContext200ApplicationJSONMessageResponse
/**
 * message response
 **/
export class AddEnvironmentVariableToContext200ApplicationJSONMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class AddEnvironmentVariableToContext200ApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "context_id" })
  contextId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "variable" })
  variable: string;
}

export class AddEnvironmentVariableToContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  addEnvironmentVariableToContext200ApplicationJSONAnyOf?: any;

  @SpeakeasyMetadata()
  addEnvironmentVariableToContextDefaultApplicationJSONObject?: AddEnvironmentVariableToContextDefaultApplicationJSON;
}
