import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetJobDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-number" })
  jobNumber: any;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class GetJobDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobDetailsPathParams;
}

export class GetJobDetailsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// GetJobDetailsJobDetailsContexts
/** 
 * Information about the context.
**/
export class GetJobDetailsJobDetailsContexts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

// GetJobDetailsJobDetailsExecutor
/** 
 * Information about executor used for a job.
**/
export class GetJobDetailsJobDetailsExecutor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource_class" })
  resourceClass: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

// GetJobDetailsJobDetailsLatestWorkflow
/** 
 * Info about the latest workflow the job was a part of.
**/
export class GetJobDetailsJobDetailsLatestWorkflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

// GetJobDetailsJobDetailsMessages
/** 
 * Message from CircleCI execution platform.
**/
export class GetJobDetailsJobDetailsMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

// GetJobDetailsJobDetailsOrganization
/** 
 * Information about an organization.
**/
export class GetJobDetailsJobDetailsOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

// GetJobDetailsJobDetailsParallelRuns
/** 
 * Info about a status of the parallel run.
**/
export class GetJobDetailsJobDetailsParallelRuns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}

// GetJobDetailsJobDetailsPipeline
/** 
 * Info about a pipeline the job is a part of.
**/
export class GetJobDetailsJobDetailsPipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// GetJobDetailsJobDetailsProject
/** 
 * Information about a project.
**/
export class GetJobDetailsJobDetailsProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external_url" })
  externalUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
export enum GetJobDetailsJobDetailsStatusEnum {
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

// GetJobDetailsJobDetails
/** 
 * Job Details
**/
export class GetJobDetailsJobDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: GetJobDetailsJobDetailsContexts })
  contexts: GetJobDetailsJobDetailsContexts[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=executor" })
  executor: GetJobDetailsJobDetailsExecutor;

  @SpeakeasyMetadata({ data: "json, name=latest_workflow" })
  latestWorkflow: GetJobDetailsJobDetailsLatestWorkflow;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GetJobDetailsJobDetailsMessages })
  messages: GetJobDetailsJobDetailsMessages[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization: GetJobDetailsJobDetailsOrganization;

  @SpeakeasyMetadata({ data: "json, name=parallel_runs", elemType: GetJobDetailsJobDetailsParallelRuns })
  parallelRuns: GetJobDetailsJobDetailsParallelRuns[];

  @SpeakeasyMetadata({ data: "json, name=parallelism" })
  parallelism: number;

  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline: GetJobDetailsJobDetailsPipeline;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project: GetJobDetailsJobDetailsProject;

  @SpeakeasyMetadata({ data: "json, name=queued_at" })
  queuedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetJobDetailsJobDetailsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped_at" })
  stoppedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=web_url" })
  webUrl: string;
}

export class GetJobDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  jobDetails?: GetJobDetailsJobDetails;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getJobDetailsDefaultApplicationJSONObject?: GetJobDetailsDefaultApplicationJSON;
}