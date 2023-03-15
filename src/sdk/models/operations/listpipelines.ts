import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListPipelinesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" })
  mine?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=org-slug",
  })
  orgSlug?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page-token",
  })
  pageToken?: string;
}

export class ListPipelinesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPipelinesQueryParams;
}

export class ListPipelinesDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum ListPipelinesPipelineListResponsePipelineErrorsTypeEnum {
  Config = "config",
  ConfigFetch = "config-fetch",
  Timeout = "timeout",
  Permission = "permission",
  Other = "other",
  Plan = "plan",
}

// ListPipelinesPipelineListResponsePipelineErrors
/**
 * An error with a type and message.
 **/
export class ListPipelinesPipelineListResponsePipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListPipelinesPipelineListResponsePipelineErrorsTypeEnum;
}
export enum ListPipelinesPipelineListResponsePipelineStateEnum {
  Created = "created",
  Errored = "errored",
  SetupPending = "setup-pending",
  Setup = "setup",
  Pending = "pending",
}

// ListPipelinesPipelineListResponsePipelineTriggerActor
/**
 * The user who triggered the Pipeline.
 **/
export class ListPipelinesPipelineListResponsePipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "login" })
  login: string;
}
export enum ListPipelinesPipelineListResponsePipelineTriggerTypeEnum {
  ScheduledPipeline = "scheduled_pipeline",
  Explicit = "explicit",
  Api = "api",
  Webhook = "webhook",
}

// ListPipelinesPipelineListResponsePipelineTrigger
/**
 * A summary of the trigger.
 **/
export class ListPipelinesPipelineListResponsePipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => ListPipelinesPipelineListResponsePipelineTriggerActor)
  actor: ListPipelinesPipelineListResponsePipelineTriggerActor;

  @SpeakeasyMetadata()
  @Expose({ name: "received_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  receivedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListPipelinesPipelineListResponsePipelineTriggerTypeEnum;
}

// ListPipelinesPipelineListResponsePipelineVcsCommit
/**
 * The latest commit in the pipeline.
 **/
export class ListPipelinesPipelineListResponsePipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subject" })
  subject: string;
}

// ListPipelinesPipelineListResponsePipelineVcs
/**
 * VCS information for the pipeline.
 **/
export class ListPipelinesPipelineListResponsePipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commit" })
  @Type(() => ListPipelinesPipelineListResponsePipelineVcsCommit)
  commit?: ListPipelinesPipelineListResponsePipelineVcsCommit;

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

// ListPipelinesPipelineListResponsePipeline
/**
 * A pipeline response.
 **/
export class ListPipelinesPipelineListResponsePipeline extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata({
    elemType: ListPipelinesPipelineListResponsePipelineErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => ListPipelinesPipelineListResponsePipelineErrors)
  errors: ListPipelinesPipelineListResponsePipelineErrors[];

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
  state: ListPipelinesPipelineListResponsePipelineStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger" })
  @Type(() => ListPipelinesPipelineListResponsePipelineTrigger)
  trigger: ListPipelinesPipelineListResponsePipelineTrigger;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "vcs" })
  @Type(() => ListPipelinesPipelineListResponsePipelineVcs)
  vcs?: ListPipelinesPipelineListResponsePipelineVcs;
}

// ListPipelinesPipelineListResponse
/**
 * List of pipelines
 **/
export class ListPipelinesPipelineListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListPipelinesPipelineListResponsePipeline })
  @Expose({ name: "items" })
  @Type(() => ListPipelinesPipelineListResponsePipeline)
  items: ListPipelinesPipelineListResponsePipeline[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListPipelinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipelineListResponse?: ListPipelinesPipelineListResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listPipelinesDefaultApplicationJSONObject?: ListPipelinesDefaultApplicationJSON;
}
