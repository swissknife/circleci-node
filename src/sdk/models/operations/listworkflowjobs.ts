import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListWorkflowJobsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class ListWorkflowJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListWorkflowJobsPathParams;
}

export class ListWorkflowJobsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
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
  Unauthorized = "unauthorized",
}
export enum ListWorkflowJobsWorkflowJobListResponseJobTypeEnum {
  Build = "build",
  Approval = "approval",
}

// ListWorkflowJobsWorkflowJobListResponseJob
/**
 * Job
 **/
export class ListWorkflowJobsWorkflowJobListResponseJob extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "approval_request_id" })
  approvalRequestId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "approved_by" })
  approvedBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "canceled_by" })
  canceledBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dependencies" })
  dependencies: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job_number" })
  jobNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "started_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListWorkflowJobsWorkflowJobListResponseJobStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "stopped_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  stoppedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListWorkflowJobsWorkflowJobListResponseJobTypeEnum;
}

export class ListWorkflowJobsWorkflowJobListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListWorkflowJobsWorkflowJobListResponseJob })
  @Expose({ name: "items" })
  @Type(() => ListWorkflowJobsWorkflowJobListResponseJob)
  items: ListWorkflowJobsWorkflowJobListResponseJob[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListWorkflowJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  workflowJobListResponse?: ListWorkflowJobsWorkflowJobListResponse;

  @SpeakeasyMetadata()
  listWorkflowJobsDefaultApplicationJSONObject?: ListWorkflowJobsDefaultApplicationJSON;
}
