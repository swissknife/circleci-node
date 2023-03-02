import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListWorkflowsByPipelineIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline-id" })
  pipelineId: string;
}

export class ListWorkflowsByPipelineIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
}

export class ListWorkflowsByPipelineIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListWorkflowsByPipelineIdPathParams;

  @SpeakeasyMetadata()
  queryParams: ListWorkflowsByPipelineIdQueryParams;
}

export class ListWorkflowsByPipelineIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatusEnum {
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
export enum ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTagEnum {
    Setup = "setup"
}

// ListWorkflowsByPipelineIdWorkflowListResponseWorkflow
/** 
 * A workflow
**/
export class ListWorkflowsByPipelineIdWorkflowListResponseWorkflow extends SpeakeasyBase {
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
  status: ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "stopped_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  stoppedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag?: ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTagEnum;
}

// ListWorkflowsByPipelineIdWorkflowListResponse
/** 
 * A list of workflows and associated pagination token.
**/
export class ListWorkflowsByPipelineIdWorkflowListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListWorkflowsByPipelineIdWorkflowListResponseWorkflow })
  @Expose({ name: "items" })
  @Type(() => ListWorkflowsByPipelineIdWorkflowListResponseWorkflow)
  items: ListWorkflowsByPipelineIdWorkflowListResponseWorkflow[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListWorkflowsByPipelineIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workflowListResponse?: ListWorkflowsByPipelineIdWorkflowListResponse;

  @SpeakeasyMetadata()
  listWorkflowsByPipelineIdDefaultApplicationJSONObject?: ListWorkflowsByPipelineIdDefaultApplicationJSON;
}