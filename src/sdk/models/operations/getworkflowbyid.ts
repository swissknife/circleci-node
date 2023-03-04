import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetWorkflowByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetWorkflowByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkflowByIdPathParams;
}

export class GetWorkflowByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum GetWorkflowByIdWorkflowStatusEnum {
    Success = "success",
    Running = "running",
    NotRun = "not_run",
    Failed = "failed",
    Error = "error",
    Failing = "failing",
    OnHold = "on_hold",
    Canceled = "canceled",
    Unauthorized = "unauthorized"
}
export enum GetWorkflowByIdWorkflowTagEnum {
    Setup = "setup"
}

// GetWorkflowByIdWorkflow
/** 
 * A workflow
**/
export class GetWorkflowByIdWorkflow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canceled_by" })
  canceledBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "errored_by" })
  erroredBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pipeline_id" })
  pipelineId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pipeline_number" })
  pipelineNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "started_by" })
  startedBy: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetWorkflowByIdWorkflowStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "stopped_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  stoppedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag?: GetWorkflowByIdWorkflowTagEnum;
}

export class GetWorkflowByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  workflow?: GetWorkflowByIdWorkflow;

  @SpeakeasyMetadata()
  getWorkflowByIdDefaultApplicationJSONObject?: GetWorkflowByIdDefaultApplicationJSON;
}