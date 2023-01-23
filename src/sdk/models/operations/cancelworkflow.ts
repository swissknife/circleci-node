import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


// CancelWorkflowMessageResponse
/** 
 * message response
**/
export class CancelWorkflowMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class CancelWorkflowDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CancelWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelWorkflowPathParams;
}


export class CancelWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: CancelWorkflowMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelWorkflowDefaultApplicationJSONObject?: CancelWorkflowDefaultApplicationJson;
}
