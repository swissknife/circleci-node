import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkflowByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
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
  status: GetWorkflowByIdWorkflowStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped_at" })
  stoppedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: GetWorkflowByIdWorkflowTagEnum;
}


export class GetWorkflowByIdDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetWorkflowByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkflowByIdPathParams;
}


export class GetWorkflowByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workflow?: GetWorkflowByIdWorkflow;

  @SpeakeasyMetadata()
  getWorkflowByIdDefaultApplicationJSONObject?: GetWorkflowByIdDefaultApplicationJson;
}
