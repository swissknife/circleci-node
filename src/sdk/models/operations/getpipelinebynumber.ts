import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetPipelineByNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pipeline-number",
  })
  pipelineNumber: any;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}

export class GetPipelineByNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineByNumberPathParams;
}

export class GetPipelineByNumberDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum GetPipelineByNumberPipelineErrorsTypeEnum {
  Config = "config",
  ConfigFetch = "config-fetch",
  Timeout = "timeout",
  Permission = "permission",
  Other = "other",
  Plan = "plan",
}

// GetPipelineByNumberPipelineErrors
/**
 * An error with a type and message.
 **/
export class GetPipelineByNumberPipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetPipelineByNumberPipelineErrorsTypeEnum;
}
export enum GetPipelineByNumberPipelineStateEnum {
  Created = "created",
  Errored = "errored",
  SetupPending = "setup-pending",
  Setup = "setup",
  Pending = "pending",
}

// GetPipelineByNumberPipelineTriggerActor
/**
 * The user who triggered the Pipeline.
 **/
export class GetPipelineByNumberPipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "login" })
  login: string;
}
export enum GetPipelineByNumberPipelineTriggerTypeEnum {
  ScheduledPipeline = "scheduled_pipeline",
  Explicit = "explicit",
  Api = "api",
  Webhook = "webhook",
}

// GetPipelineByNumberPipelineTrigger
/**
 * A summary of the trigger.
 **/
export class GetPipelineByNumberPipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => GetPipelineByNumberPipelineTriggerActor)
  actor: GetPipelineByNumberPipelineTriggerActor;

  @SpeakeasyMetadata()
  @Expose({ name: "received_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  receivedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetPipelineByNumberPipelineTriggerTypeEnum;
}

// GetPipelineByNumberPipelineVcsCommit
/**
 * The latest commit in the pipeline.
 **/
export class GetPipelineByNumberPipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subject" })
  subject: string;
}

// GetPipelineByNumberPipelineVcs
/**
 * VCS information for the pipeline.
 **/
export class GetPipelineByNumberPipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commit" })
  @Type(() => GetPipelineByNumberPipelineVcsCommit)
  commit?: GetPipelineByNumberPipelineVcsCommit;

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

// GetPipelineByNumberPipeline
/**
 * A pipeline response.
 **/
export class GetPipelineByNumberPipeline extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata({ elemType: GetPipelineByNumberPipelineErrors })
  @Expose({ name: "errors" })
  @Type(() => GetPipelineByNumberPipelineErrors)
  errors: GetPipelineByNumberPipelineErrors[];

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
  state: GetPipelineByNumberPipelineStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger" })
  @Type(() => GetPipelineByNumberPipelineTrigger)
  trigger: GetPipelineByNumberPipelineTrigger;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "vcs" })
  @Type(() => GetPipelineByNumberPipelineVcs)
  vcs?: GetPipelineByNumberPipelineVcs;
}

export class GetPipelineByNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipeline?: GetPipelineByNumberPipeline;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getPipelineByNumberDefaultApplicationJSONObject?: GetPipelineByNumberDefaultApplicationJSON;
}
