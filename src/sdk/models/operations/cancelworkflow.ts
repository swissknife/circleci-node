import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class CancelWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class CancelWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelWorkflowPathParams;
}

export class CancelWorkflowDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// CancelWorkflowMessageResponse
/** 
 * message response
**/
export class CancelWorkflowMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class CancelWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: CancelWorkflowMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelWorkflowDefaultApplicationJSONObject?: CancelWorkflowDefaultApplicationJSON;
}