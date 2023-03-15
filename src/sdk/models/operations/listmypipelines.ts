import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListMyPipelinesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}

export class ListMyPipelinesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page-token",
  })
  pageToken?: string;
}

export class ListMyPipelinesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListMyPipelinesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListMyPipelinesQueryParams;
}

export class ListMyPipelinesDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum ListMyPipelinesPipelineListResponsePipelineErrorsTypeEnum {
  Config = "config",
  ConfigFetch = "config-fetch",
  Timeout = "timeout",
  Permission = "permission",
  Other = "other",
  Plan = "plan",
}

// ListMyPipelinesPipelineListResponsePipelineErrors
/**
 * An error with a type and message.
 **/
export class ListMyPipelinesPipelineListResponsePipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListMyPipelinesPipelineListResponsePipelineErrorsTypeEnum;
}
export enum ListMyPipelinesPipelineListResponsePipelineStateEnum {
  Created = "created",
  Errored = "errored",
  SetupPending = "setup-pending",
  Setup = "setup",
  Pending = "pending",
}

// ListMyPipelinesPipelineListResponsePipelineTriggerActor
/**
 * The user who triggered the Pipeline.
 **/
export class ListMyPipelinesPipelineListResponsePipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "login" })
  login: string;
}
export enum ListMyPipelinesPipelineListResponsePipelineTriggerTypeEnum {
  ScheduledPipeline = "scheduled_pipeline",
  Explicit = "explicit",
  Api = "api",
  Webhook = "webhook",
}

// ListMyPipelinesPipelineListResponsePipelineTrigger
/**
 * A summary of the trigger.
 **/
export class ListMyPipelinesPipelineListResponsePipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => ListMyPipelinesPipelineListResponsePipelineTriggerActor)
  actor: ListMyPipelinesPipelineListResponsePipelineTriggerActor;

  @SpeakeasyMetadata()
  @Expose({ name: "received_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  receivedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListMyPipelinesPipelineListResponsePipelineTriggerTypeEnum;
}

// ListMyPipelinesPipelineListResponsePipelineVcsCommit
/**
 * The latest commit in the pipeline.
 **/
export class ListMyPipelinesPipelineListResponsePipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subject" })
  subject: string;
}

// ListMyPipelinesPipelineListResponsePipelineVcs
/**
 * VCS information for the pipeline.
 **/
export class ListMyPipelinesPipelineListResponsePipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commit" })
  @Type(() => ListMyPipelinesPipelineListResponsePipelineVcsCommit)
  commit?: ListMyPipelinesPipelineListResponsePipelineVcsCommit;

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

// ListMyPipelinesPipelineListResponsePipeline
/**
 * A pipeline response.
 **/
export class ListMyPipelinesPipelineListResponsePipeline extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata({
    elemType: ListMyPipelinesPipelineListResponsePipelineErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => ListMyPipelinesPipelineListResponsePipelineErrors)
  errors: ListMyPipelinesPipelineListResponsePipelineErrors[];

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
  state: ListMyPipelinesPipelineListResponsePipelineStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger" })
  @Type(() => ListMyPipelinesPipelineListResponsePipelineTrigger)
  trigger: ListMyPipelinesPipelineListResponsePipelineTrigger;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "vcs" })
  @Type(() => ListMyPipelinesPipelineListResponsePipelineVcs)
  vcs?: ListMyPipelinesPipelineListResponsePipelineVcs;
}

// ListMyPipelinesPipelineListResponse
/**
 * List of pipelines
 **/
export class ListMyPipelinesPipelineListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListMyPipelinesPipelineListResponsePipeline })
  @Expose({ name: "items" })
  @Type(() => ListMyPipelinesPipelineListResponsePipeline)
  items: ListMyPipelinesPipelineListResponsePipeline[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListMyPipelinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipelineListResponse?: ListMyPipelinesPipelineListResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listMyPipelinesDefaultApplicationJSONObject?: ListMyPipelinesDefaultApplicationJSON;
}
