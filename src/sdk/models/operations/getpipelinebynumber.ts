import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPipelineByNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline-number" })
  pipelineNumber: any;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export enum GetPipelineByNumberPipelineErrorsTypeEnum {
    Config = "config",
    ConfigFetch = "config-fetch",
    Timeout = "timeout",
    Permission = "permission",
    Other = "other",
    Plan = "plan"
}


// GetPipelineByNumberPipelineErrors
/** 
 * An error with a type and message.
**/
export class GetPipelineByNumberPipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetPipelineByNumberPipelineErrorsTypeEnum;
}

export enum GetPipelineByNumberPipelineStateEnum {
    Created = "created",
    Errored = "errored",
    SetupPending = "setup-pending",
    Setup = "setup",
    Pending = "pending"
}


// GetPipelineByNumberPipelineTriggerActor
/** 
 * The user who triggered the Pipeline.
**/
export class GetPipelineByNumberPipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;
}

export enum GetPipelineByNumberPipelineTriggerTypeEnum {
    ScheduledPipeline = "scheduled_pipeline",
    Explicit = "explicit",
    Api = "api",
    Webhook = "webhook"
}


// GetPipelineByNumberPipelineTrigger
/** 
 * A summary of the trigger.
**/
export class GetPipelineByNumberPipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: GetPipelineByNumberPipelineTriggerActor;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetPipelineByNumberPipelineTriggerTypeEnum;
}


// GetPipelineByNumberPipelineVcsCommit
/** 
 * The latest commit in the pipeline.
**/
export class GetPipelineByNumberPipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;
}


// GetPipelineByNumberPipelineVcs
/** 
 * VCS information for the pipeline.
**/
export class GetPipelineByNumberPipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit?: GetPipelineByNumberPipelineVcsCommit;

  @SpeakeasyMetadata({ data: "json, name=origin_repository_url" })
  originRepositoryUrl: string;

  @SpeakeasyMetadata({ data: "json, name=provider_name" })
  providerName: string;

  @SpeakeasyMetadata({ data: "json, name=review_id" })
  reviewId?: string;

  @SpeakeasyMetadata({ data: "json, name=review_url" })
  reviewUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=target_repository_url" })
  targetRepositoryUrl: string;
}


// GetPipelineByNumberPipeline
/** 
 * A pipeline response.
**/
export class GetPipelineByNumberPipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetPipelineByNumberPipelineErrors })
  errors: GetPipelineByNumberPipelineErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: GetPipelineByNumberPipelineStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger: GetPipelineByNumberPipelineTrigger;

  @SpeakeasyMetadata({ data: "json, name=trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
  vcs?: GetPipelineByNumberPipelineVcs;
}


export class GetPipelineByNumberDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPipelineByNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineByNumberPathParams;
}


export class GetPipelineByNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipeline?: GetPipelineByNumberPipeline;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPipelineByNumberDefaultApplicationJSONObject?: GetPipelineByNumberDefaultApplicationJson;
}
