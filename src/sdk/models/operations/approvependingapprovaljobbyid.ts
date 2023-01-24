import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApprovePendingApprovalJobByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=approval_request_id" })
  approvalRequestId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


// ApprovePendingApprovalJobByIdMessageResponse
/** 
 * message response
**/
export class ApprovePendingApprovalJobByIdMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ApprovePendingApprovalJobByIdDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ApprovePendingApprovalJobByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApprovePendingApprovalJobByIdPathParams;
}


export class ApprovePendingApprovalJobByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: ApprovePendingApprovalJobByIdMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  approvePendingApprovalJobByIdDefaultApplicationJSONObject?: ApprovePendingApprovalJobByIdDefaultApplicationJson;
}
