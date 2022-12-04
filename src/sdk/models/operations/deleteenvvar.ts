import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEnvVarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


// DeleteEnvVarMessageResponse
/** 
 * message response
**/
export class DeleteEnvVarMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class DeleteEnvVarDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteEnvVarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEnvVarPathParams;
}


export class DeleteEnvVarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteEnvVarMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteEnvVarDefaultApplicationJsonObject?: DeleteEnvVarDefaultApplicationJson;
}
