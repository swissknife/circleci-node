import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetPipelineByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline-id" })
  pipelineId: string;
}

export class GetPipelineByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineByIdPathParams;
}

export class GetPipelineByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
export enum GetPipelineByIdPipelineErrorsTypeEnum {
    Config = "config",
    ConfigFetch = "config-fetch",
    Timeout = "timeout",
    Permission = "permission",
    Other = "other",
    Plan = "plan"
}

// GetPipelineByIdPipelineErrors
/** 
 * An error with a type and message.
**/
export class GetPipelineByIdPipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetPipelineByIdPipelineErrorsTypeEnum;
}
export enum GetPipelineByIdPipelineStateEnum {
    Created = "created",
    Errored = "errored",
    SetupPending = "setup-pending",
    Setup = "setup",
    Pending = "pending"
}

// GetPipelineByIdPipelineTriggerActor
/** 
 * The user who triggered the Pipeline.
**/
export class GetPipelineByIdPipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;
}
export enum GetPipelineByIdPipelineTriggerTypeEnum {
    ScheduledPipeline = "scheduled_pipeline",
    Explicit = "explicit",
    Api = "api",
    Webhook = "webhook"
}

// GetPipelineByIdPipelineTrigger
/** 
 * A summary of the trigger.
**/
export class GetPipelineByIdPipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: GetPipelineByIdPipelineTriggerActor;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetPipelineByIdPipelineTriggerTypeEnum;
}

// GetPipelineByIdPipelineVcsCommit
/** 
 * The latest commit in the pipeline.
**/
export class GetPipelineByIdPipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;
}

// GetPipelineByIdPipelineVcs
/** 
 * VCS information for the pipeline.
**/
export class GetPipelineByIdPipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit?: GetPipelineByIdPipelineVcsCommit;

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

// GetPipelineByIdPipeline
/** 
 * A pipeline response.
**/
export class GetPipelineByIdPipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetPipelineByIdPipelineErrors })
  errors: GetPipelineByIdPipelineErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: GetPipelineByIdPipelineStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger: GetPipelineByIdPipelineTrigger;

  @SpeakeasyMetadata({ data: "json, name=trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
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
  getPipelineByIdDefaultApplicationJSONObject?: GetPipelineByIdDefaultApplicationJSON;
}