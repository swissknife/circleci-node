import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class ApprovePendingApprovalJobByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=approval_request_id" })
  approvalRequestId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class ApprovePendingApprovalJobByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApprovePendingApprovalJobByIdPathParams;
}

export class ApprovePendingApprovalJobByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// ApprovePendingApprovalJobByIdMessageResponse
/** 
 * message response
**/
export class ApprovePendingApprovalJobByIdMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class ApprovePendingApprovalJobByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: ApprovePendingApprovalJobByIdMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  approvePendingApprovalJobByIdDefaultApplicationJSONObject?: ApprovePendingApprovalJobByIdDefaultApplicationJSON;
}