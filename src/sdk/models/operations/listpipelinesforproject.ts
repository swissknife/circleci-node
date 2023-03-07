import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class ListPipelinesForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class ListPipelinesForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
}

export class ListPipelinesForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPipelinesForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: ListPipelinesForProjectQueryParams;
}

export class ListPipelinesForProjectDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum ListPipelinesForProjectPipelineListResponsePipelineErrorsTypeEnum {
    Config = "config",
    ConfigFetch = "config-fetch",
    Timeout = "timeout",
    Permission = "permission",
    Other = "other",
    Plan = "plan"
}

// ListPipelinesForProjectPipelineListResponsePipelineErrors
/** 
 * An error with a type and message.
**/
export class ListPipelinesForProjectPipelineListResponsePipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListPipelinesForProjectPipelineListResponsePipelineErrorsTypeEnum;
}
export enum ListPipelinesForProjectPipelineListResponsePipelineStateEnum {
    Created = "created",
    Errored = "errored",
    SetupPending = "setup-pending",
    Setup = "setup",
    Pending = "pending"
}

// ListPipelinesForProjectPipelineListResponsePipelineTriggerActor
/** 
 * The user who triggered the Pipeline.
**/
export class ListPipelinesForProjectPipelineListResponsePipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "login" })
  login: string;
}
export enum ListPipelinesForProjectPipelineListResponsePipelineTriggerTypeEnum {
    ScheduledPipeline = "scheduled_pipeline",
    Explicit = "explicit",
    Api = "api",
    Webhook = "webhook"
}

// ListPipelinesForProjectPipelineListResponsePipelineTrigger
/** 
 * A summary of the trigger.
**/
export class ListPipelinesForProjectPipelineListResponsePipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => ListPipelinesForProjectPipelineListResponsePipelineTriggerActor)
  actor: ListPipelinesForProjectPipelineListResponsePipelineTriggerActor;

  @SpeakeasyMetadata()
  @Expose({ name: "received_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  receivedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListPipelinesForProjectPipelineListResponsePipelineTriggerTypeEnum;
}

// ListPipelinesForProjectPipelineListResponsePipelineVcsCommit
/** 
 * The latest commit in the pipeline.
**/
export class ListPipelinesForProjectPipelineListResponsePipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subject" })
  subject: string;
}

// ListPipelinesForProjectPipelineListResponsePipelineVcs
/** 
 * VCS information for the pipeline.
**/
export class ListPipelinesForProjectPipelineListResponsePipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commit" })
  @Type(() => ListPipelinesForProjectPipelineListResponsePipelineVcsCommit)
  commit?: ListPipelinesForProjectPipelineListResponsePipelineVcsCommit;

  @SpeakeasyMetadata()
  @Expose({ name: "origin_repository_url" })
  originRepositoryUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider_name" })
  providerName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "review_id" })
  reviewId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "review_url" })
  reviewUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "revision" })
  revision: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "target_repository_url" })
  targetRepositoryUrl: string;
}

// ListPipelinesForProjectPipelineListResponsePipeline
/** 
 * A pipeline response.
**/
export class ListPipelinesForProjectPipelineListResponsePipeline extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata({ elemType: ListPipelinesForProjectPipelineListResponsePipelineErrors })
  @Expose({ name: "errors" })
  @Type(() => ListPipelinesForProjectPipelineListResponsePipelineErrors)
  errors: ListPipelinesForProjectPipelineListResponsePipelineErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number: number;

  @SpeakeasyMetadata()
  @Expose({ name: "project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: ListPipelinesForProjectPipelineListResponsePipelineStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger" })
  @Type(() => ListPipelinesForProjectPipelineListResponsePipelineTrigger)
  trigger: ListPipelinesForProjectPipelineListResponsePipelineTrigger;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "vcs" })
  @Type(() => ListPipelinesForProjectPipelineListResponsePipelineVcs)
  vcs?: ListPipelinesForProjectPipelineListResponsePipelineVcs;
}

// ListPipelinesForProjectPipelineListResponse
/** 
 * List of pipelines
**/
export class ListPipelinesForProjectPipelineListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListPipelinesForProjectPipelineListResponsePipeline })
  @Expose({ name: "items" })
  @Type(() => ListPipelinesForProjectPipelineListResponsePipeline)
  items: ListPipelinesForProjectPipelineListResponsePipeline[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListPipelinesForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipelineListResponse?: ListPipelinesForProjectPipelineListResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listPipelinesForProjectDefaultApplicationJSONObject?: ListPipelinesForProjectDefaultApplicationJSON;
}