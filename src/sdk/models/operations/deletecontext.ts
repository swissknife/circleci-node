import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
  contextId: string;
}


// DeleteContextMessageResponse
/** 
 * message response
**/
export class DeleteContextMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class DeleteContextDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteContextPathParams;
}


export class DeleteContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteContextMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteContextDefaultApplicationJsonObject?: DeleteContextDefaultApplicationJson;
}
