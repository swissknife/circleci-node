import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListWorkflowJobsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum ListWorkflowJobsWorkflowJobListResponseJobStatusEnum {
    Success = "success",
    Running = "running",
    NotRun = "not_run",
    Failed = "failed",
    Retried = "retried",
    Queued = "queued",
    NotRunning = "not_running",
    InfrastructureFail = "infrastructure_fail",
    Timedout = "timedout",
    OnHold = "on_hold",
    TerminatedUnknown = "terminated-unknown",
    Blocked = "blocked",
    Canceled = "canceled",
    Unauthorized = "unauthorized"
}

export enum ListWorkflowJobsWorkflowJobListResponseJobTypeEnum {
    Build = "build",
    Approval = "approval"
}


// ListWorkflowJobsWorkflowJobListResponseJob
/** 
 * Job
**/
export class ListWorkflowJobsWorkflowJobListResponseJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approval_request_id" })
  approvalRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=approved_by" })
  approvedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=canceled_by" })
  canceledBy?: string;

  @SpeakeasyMetadata({ data: "json, name=dependencies" })
  dependencies: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=job_number" })
  jobNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ListWorkflowJobsWorkflowJobListResponseJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped_at" })
  stoppedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListWorkflowJobsWorkflowJobListResponseJobTypeEnum;
}


export class ListWorkflowJobsWorkflowJobListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListWorkflowJobsWorkflowJobListResponseJob })
  items: ListWorkflowJobsWorkflowJobListResponseJob[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class ListWorkflowJobsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListWorkflowJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListWorkflowJobsPathParams;
}


export class ListWorkflowJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workflowJobListResponse?: ListWorkflowJobsWorkflowJobListResponse;

  @SpeakeasyMetadata()
  listWorkflowJobsDefaultApplicationJsonObject?: ListWorkflowJobsDefaultApplicationJson;
}
