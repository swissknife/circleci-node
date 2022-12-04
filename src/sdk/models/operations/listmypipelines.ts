import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListMyPipelinesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


export class ListMyPipelinesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
}

export enum ListMyPipelinesPipelineListResponsePipelineErrorsTypeEnum {
    Config = "config",
    ConfigFetch = "config-fetch",
    Timeout = "timeout",
    Permission = "permission",
    Other = "other",
    Plan = "plan"
}


// ListMyPipelinesPipelineListResponsePipelineErrors
/** 
 * An error with a type and message.
**/
export class ListMyPipelinesPipelineListResponsePipelineErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListMyPipelinesPipelineListResponsePipelineErrorsTypeEnum;
}

export enum ListMyPipelinesPipelineListResponsePipelineStateEnum {
    Created = "created",
    Errored = "errored",
    SetupPending = "setup-pending",
    Setup = "setup",
    Pending = "pending"
}


// ListMyPipelinesPipelineListResponsePipelineTriggerActor
/** 
 * The user who triggered the Pipeline.
**/
export class ListMyPipelinesPipelineListResponsePipelineTriggerActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;
}

export enum ListMyPipelinesPipelineListResponsePipelineTriggerTypeEnum {
    ScheduledPipeline = "scheduled_pipeline",
    Explicit = "explicit",
    Api = "api",
    Webhook = "webhook"
}


// ListMyPipelinesPipelineListResponsePipelineTrigger
/** 
 * A summary of the trigger.
**/
export class ListMyPipelinesPipelineListResponsePipelineTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: ListMyPipelinesPipelineListResponsePipelineTriggerActor;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListMyPipelinesPipelineListResponsePipelineTriggerTypeEnum;
}


// ListMyPipelinesPipelineListResponsePipelineVcsCommit
/** 
 * The latest commit in the pipeline.
**/
export class ListMyPipelinesPipelineListResponsePipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;
}


// ListMyPipelinesPipelineListResponsePipelineVcs
/** 
 * VCS information for the pipeline.
**/
export class ListMyPipelinesPipelineListResponsePipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit?: ListMyPipelinesPipelineListResponsePipelineVcsCommit;

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


// ListMyPipelinesPipelineListResponsePipeline
/** 
 * A pipeline response.
**/
export class ListMyPipelinesPipelineListResponsePipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ListMyPipelinesPipelineListResponsePipelineErrors })
  errors: ListMyPipelinesPipelineListResponsePipelineErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ListMyPipelinesPipelineListResponsePipelineStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger: ListMyPipelinesPipelineListResponsePipelineTrigger;

  @SpeakeasyMetadata({ data: "json, name=trigger_parameters" })
  triggerParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
  vcs?: ListMyPipelinesPipelineListResponsePipelineVcs;
}


// ListMyPipelinesPipelineListResponse
/** 
 * List of pipelines
**/
export class ListMyPipelinesPipelineListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListMyPipelinesPipelineListResponsePipeline })
  items: ListMyPipelinesPipelineListResponsePipeline[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class ListMyPipelinesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListMyPipelinesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListMyPipelinesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListMyPipelinesQueryParams;
}


export class ListMyPipelinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipelineListResponse?: ListMyPipelinesPipelineListResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listMyPipelinesDefaultApplicationJsonObject?: ListMyPipelinesDefaultApplicationJson;
}
