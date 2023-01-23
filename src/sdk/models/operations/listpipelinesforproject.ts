import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
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
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
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
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: ListPipelinesForProjectPipelineListResponsePipelineTriggerActor;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListPipelinesForProjectPipelineListResponsePipelineTriggerTypeEnum;
}


// ListPipelinesForProjectPipelineListResponsePipelineVcsCommit
/** 
 * The latest commit in the pipeline.
**/
export class ListPipelinesForProjectPipelineListResponsePipelineVcsCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;
}


// ListPipelinesForProjectPipelineListResponsePipelineVcs
/** 
 * VCS information for the pipeline.
**/
export class ListPipelinesForProjectPipelineListResponsePipelineVcs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit?: ListPipelinesForProjectPipelineListResponsePipelineVcsCommit;

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


// ListPipelinesForProjectPipelineListResponsePipeline
/** 
 * A pipeline response.
**/
export class ListPipelinesForProjectPipelineListResponsePipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ListPipelinesForProjectPipelineListResponsePipelineErrors })
  errors: ListPipelinesForProjectPipelineListResponsePipelineErrors[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ListPipelinesForProjectPipelineListResponsePipelineStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger: ListPipelinesForProjectPipelineListResponsePipelineTrigger;

  @SpeakeasyMetadata({ data: "json, name=trigger_parameters" })
  triggerParameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
  vcs?: ListPipelinesForProjectPipelineListResponsePipelineVcs;
}


// ListPipelinesForProjectPipelineListResponse
/** 
 * List of pipelines
**/
export class ListPipelinesForProjectPipelineListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListPipelinesForProjectPipelineListResponsePipeline })
  items: ListPipelinesForProjectPipelineListResponsePipeline[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class ListPipelinesForProjectDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPipelinesForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPipelinesForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: ListPipelinesForProjectQueryParams;
}


export class ListPipelinesForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipelineListResponse?: ListPipelinesForProjectPipelineListResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPipelinesForProjectDefaultApplicationJSONObject?: ListPipelinesForProjectDefaultApplicationJson;
}
