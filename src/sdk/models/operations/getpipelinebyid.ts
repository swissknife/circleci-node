import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetPipelineByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pipeline-id",
  })
  pipelineId: string;
}

export class GetPipelineByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineByIdPathParams;
}

export class GetPipelineByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum GetPipelineByIdPipelineErrorsTypeEnum {
  Config = "config",
  ConfigFetch = "config-fetch",
  Timeout = "timeout",
  Permission = "permission",
  Other = "other",
  Plan = "plan",
}

// GetPipelineByIdPipelineErrors
/**
 * An error with a type and message.
 **/
export class GetPipelineByIdPipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetPipelineByIdPipelineErrorsTypeEnum;
}
export enum GetPipelineByIdPipelineStateEnum {
  Created = "created",
  Errored = "errored",
  SetupPending = "setup-pending",
  Setup = "setup",
  Pending = "pending",
}

// GetPipelineByIdPipelineTriggerActor
/**
 * The user who triggered the Pipeline.
 **/
export class GetPipelineByIdPipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "login" })
  login: string;
}
export enum GetPipelineByIdPipelineTriggerTypeEnum {
  ScheduledPipeline = "scheduled_pipeline",
  Explicit = "explicit",
  Api = "api",
  Webhook = "webhook",
}

// GetPipelineByIdPipelineTrigger
/**
 * A summary of the trigger.
 **/
export class GetPipelineByIdPipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => GetPipelineByIdPipelineTriggerActor)
  actor: GetPipelineByIdPipelineTriggerActor;

  @SpeakeasyMetadata()
  @Expose({ name: "received_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  receivedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetPipelineByIdPipelineTriggerTypeEnum;
}

// GetPipelineByIdPipelineVcsCommit
/**
 * The latest commit in the pipeline.
 **/
export class GetPipelineByIdPipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subject" })
  subject: string;
}

// GetPipelineByIdPipelineVcs
/**
 * VCS information for the pipeline.
 **/
export class GetPipelineByIdPipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commit" })
  @Type(() => GetPipelineByIdPipelineVcsCommit)
  commit?: GetPipelineByIdPipelineVcsCommit;

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

// GetPipelineByIdPipeline
/**
 * A pipeline response.
 **/
export class GetPipelineByIdPipeline extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata({ elemType: GetPipelineByIdPipelineErrors })
  @Expose({ name: "errors" })
  @Type(() => GetPipelineByIdPipelineErrors)
  errors: GetPipelineByIdPipelineErrors[];

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
  state: GetPipelineByIdPipelineStateEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger" })
  @Type(() => GetPipelineByIdPipelineTrigger)
  trigger: GetPipelineByIdPipelineTrigger;

  @SpeakeasyMetadata()
  @Expose({ name: "trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "vcs" })
  @Type(() => GetPipelineByIdPipelineVcs)
  vcs?: GetPipelineByIdPipelineVcs;
}

export class GetPipelineByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipeline?: GetPipelineByIdPipeline;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getPipelineByIdDefaultApplicationJSONObject?: GetPipelineByIdDefaultApplicationJSON;
}
