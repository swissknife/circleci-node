import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListPipelinesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" })
  mine?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org-slug" })
  orgSlug?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
}

export class ListPipelinesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPipelinesQueryParams;
}

export class ListPipelinesDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
export enum ListPipelinesPipelineListResponsePipelineErrorsTypeEnum {
    Config = "config",
    ConfigFetch = "config-fetch",
    Timeout = "timeout",
    Permission = "permission",
    Other = "other",
    Plan = "plan"
}

// ListPipelinesPipelineListResponsePipelineErrors
/** 
 * An error with a type and message.
**/
export class ListPipelinesPipelineListResponsePipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListPipelinesPipelineListResponsePipelineErrorsTypeEnum;
}
export enum ListPipelinesPipelineListResponsePipelineStateEnum {
    Created = "created",
    Errored = "errored",
    SetupPending = "setup-pending",
    Setup = "setup",
    Pending = "pending"
}

// ListPipelinesPipelineListResponsePipelineTriggerActor
/** 
 * The user who triggered the Pipeline.
**/
export class ListPipelinesPipelineListResponsePipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;
}
export enum ListPipelinesPipelineListResponsePipelineTriggerTypeEnum {
    ScheduledPipeline = "scheduled_pipeline",
    Explicit = "explicit",
    Api = "api",
    Webhook = "webhook"
}

// ListPipelinesPipelineListResponsePipelineTrigger
/** 
 * A summary of the trigger.
**/
export class ListPipelinesPipelineListResponsePipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: ListPipelinesPipelineListResponsePipelineTriggerActor;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListPipelinesPipelineListResponsePipelineTriggerTypeEnum;
}

// ListPipelinesPipelineListResponsePipelineVcsCommit
/** 
 * The latest commit in the pipeline.
**/
export class ListPipelinesPipelineListResponsePipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;
}

// ListPipelinesPipelineListResponsePipelineVcs
/** 
 * VCS information for the pipeline.
**/
export class ListPipelinesPipelineListResponsePipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit?: ListPipelinesPipelineListResponsePipelineVcsCommit;

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

// ListPipelinesPipelineListResponsePipeline
/** 
 * A pipeline response.
**/
export class ListPipelinesPipelineListResponsePipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ListPipelinesPipelineListResponsePipelineErrors })
  errors: ListPipelinesPipelineListResponsePipelineErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ListPipelinesPipelineListResponsePipelineStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger: ListPipelinesPipelineListResponsePipelineTrigger;

  @SpeakeasyMetadata({ data: "json, name=trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
  vcs?: ListPipelinesPipelineListResponsePipelineVcs;
}

// ListPipelinesPipelineListResponse
/** 
 * List of pipelines
**/
export class ListPipelinesPipelineListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListPipelinesPipelineListResponsePipeline })
  items: ListPipelinesPipelineListResponsePipeline[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
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
  listPipelinesDefaultApplicationJSONObject?: ListPipelinesDefaultApplicationJSON;
}