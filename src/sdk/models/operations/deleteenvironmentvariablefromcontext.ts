import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEnvironmentVariableFromContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
  contextId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=env-var-name" })
  envVarName: string;
}


// DeleteEnvironmentVariableFromContextMessageResponse
/** 
 * message response
**/
export class DeleteEnvironmentVariableFromContextMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class DeleteEnvironmentVariableFromContextDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteEnvironmentVariableFromContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEnvironmentVariableFromContextPathParams;
}


export class DeleteEnvironmentVariableFromContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteEnvironmentVariableFromContextMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteEnvironmentVariableFromContextDefaultApplicationJSONObject?: DeleteEnvironmentVariableFromContextDefaultApplicationJson;
}
