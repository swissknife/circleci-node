import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListWorkflowsByPipelineIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline-id" })
  pipelineId: string;
}


export class ListWorkflowsByPipelineIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
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
  @SpeakeasyMetadata({ data: "json, name=canceled_by" })
  canceledBy?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=errored_by" })
  erroredBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pipeline_id" })
  pipelineId: string;

  @SpeakeasyMetadata({ data: "json, name=pipeline_number" })
  pipelineNumber: number;

  @SpeakeasyMetadata({ data: "json, name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=started_by" })
  startedBy: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped_at" })
  stoppedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTagEnum;
}


// ListWorkflowsByPipelineIdWorkflowListResponse
/** 
 * A list of workflows and associated pagination token.
**/
export class ListWorkflowsByPipelineIdWorkflowListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListWorkflowsByPipelineIdWorkflowListResponseWorkflow })
  items: ListWorkflowsByPipelineIdWorkflowListResponseWorkflow[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class ListWorkflowsByPipelineIdDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListWorkflowsByPipelineIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListWorkflowsByPipelineIdPathParams;

  @SpeakeasyMetadata()
  queryParams: ListWorkflowsByPipelineIdQueryParams;
}


export class ListWorkflowsByPipelineIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workflowListResponse?: ListWorkflowsByPipelineIdWorkflowListResponse;

  @SpeakeasyMetadata()
  listWorkflowsByPipelineIdDefaultApplicationJSONObject?: ListWorkflowsByPipelineIdDefaultApplicationJson;
}
