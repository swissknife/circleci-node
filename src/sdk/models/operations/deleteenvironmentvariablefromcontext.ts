import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class DeleteEnvironmentVariableFromContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
  contextId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=env-var-name" })
  envVarName: string;
}

export class DeleteEnvironmentVariableFromContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEnvironmentVariableFromContextPathParams;
}

export class DeleteEnvironmentVariableFromContextDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// DeleteEnvironmentVariableFromContextMessageResponse
/** 
 * message response
**/
export class DeleteEnvironmentVariableFromContextMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class DeleteEnvironmentVariableFromContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteEnvironmentVariableFromContextMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  deleteEnvironmentVariableFromContextDefaultApplicationJSONObject?: DeleteEnvironmentVariableFromContextDefaultApplicationJSON;
}