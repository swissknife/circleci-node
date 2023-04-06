/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ApprovePendingApprovalJobByIdRequest extends SpeakeasyBase {
  /**
   * The ID of the job being approved.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=approval_request_id",
  })
  approvalRequestId: string;

  /**
   * The unique ID of the workflow.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

/**
 * Error response.
 */
export class ApprovePendingApprovalJobByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * message response
 */
export class ApprovePendingApprovalJobByIdMessageResponse extends SpeakeasyBase {
  /**
   * A human-readable message
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class ApprovePendingApprovalJobByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * A confirmation message.
   */
  @SpeakeasyMetadata()
  messageResponse?: ApprovePendingApprovalJobByIdMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  approvePendingApprovalJobByIdDefaultApplicationJSONObject?: ApprovePendingApprovalJobByIdDefaultApplicationJSON;
}
