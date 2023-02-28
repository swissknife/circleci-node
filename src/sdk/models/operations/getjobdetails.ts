import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetJobDetailsJobDetailsContexts
/** 
 * Information about the context.
**/
export class GetJobDetailsJobDetailsContexts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// GetJobDetailsJobDetailsExecutor
/** 
 * Information about executor used for a job.
**/
export class GetJobDetailsJobDetailsExecutor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "resource_class" })
  resourceClass: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

// GetJobDetailsJobDetailsLatestWorkflow
/** 
 * Info about the latest workflow the job was a part of.
**/
export class GetJobDetailsJobDetailsLatestWorkflow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// GetJobDetailsJobDetailsMessages
/** 
 * Message from CircleCI execution platform.
**/
export class GetJobDetailsJobDetailsMessages extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

// GetJobDetailsJobDetailsOrganization
/** 
 * Information about an organization.
**/
export class GetJobDetailsJobDetailsOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

// GetJobDetailsJobDetailsParallelRuns
/** 
 * Info about a status of the parallel run.
**/
export class GetJobDetailsJobDetailsParallelRuns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;
}

// GetJobDetailsJobDetailsPipeline
/** 
 * Info about a pipeline the job is a part of.
**/
export class GetJobDetailsJobDetailsPipeline extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// GetJobDetailsJobDetailsProject
/** 
 * Information about a project.
**/
export class GetJobDetailsJobDetailsProject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "external_url" })
  externalUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
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
  @SpeakeasyMetadata({ elemType: GetJobDetailsJobDetailsContexts })
  @Expose({ name: "contexts" })
  @Type(() => GetJobDetailsJobDetailsContexts)
  contexts: GetJobDetailsJobDetailsContexts[];

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration: number;

  @SpeakeasyMetadata()
  @Expose({ name: "executor" })
  @Type(() => GetJobDetailsJobDetailsExecutor)
  executor: GetJobDetailsJobDetailsExecutor;

  @SpeakeasyMetadata()
  @Expose({ name: "latest_workflow" })
  @Type(() => GetJobDetailsJobDetailsLatestWorkflow)
  latestWorkflow: GetJobDetailsJobDetailsLatestWorkflow;

  @SpeakeasyMetadata({ elemType: GetJobDetailsJobDetailsMessages })
  @Expose({ name: "messages" })
  @Type(() => GetJobDetailsJobDetailsMessages)
  messages: GetJobDetailsJobDetailsMessages[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number: number;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  @Type(() => GetJobDetailsJobDetailsOrganization)
  organization: GetJobDetailsJobDetailsOrganization;

  @SpeakeasyMetadata({ elemType: GetJobDetailsJobDetailsParallelRuns })
  @Expose({ name: "parallel_runs" })
  @Type(() => GetJobDetailsJobDetailsParallelRuns)
  parallelRuns: GetJobDetailsJobDetailsParallelRuns[];

  @SpeakeasyMetadata()
  @Expose({ name: "parallelism" })
  parallelism: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pipeline" })
  @Type(() => GetJobDetailsJobDetailsPipeline)
  pipeline: GetJobDetailsJobDetailsPipeline;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  @Type(() => GetJobDetailsJobDetailsProject)
  project: GetJobDetailsJobDetailsProject;

  @SpeakeasyMetadata()
  @Expose({ name: "queued_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  queuedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "started_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetJobDetailsJobDetailsStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "stopped_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  stoppedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "web_url" })
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