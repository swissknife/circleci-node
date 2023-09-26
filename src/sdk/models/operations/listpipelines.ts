/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListPipelinesRequest extends SpeakeasyBase {
    /**
     * Only include entries created by your user.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" })
    mine?: boolean;

    /**
     * Org slug in the form `vcs-slug/org-name`
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org-slug" })
    orgSlug?: string;

    /**
     * A token to retrieve the next page of results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
    pageToken?: string;
}

/**
 * Error response.
 */
export class ListPipelinesDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The type of error.
 */
export enum ListPipelinesPipelineListResponsePipelineErrorsType {
    Config = "config",
    ConfigFetch = "config-fetch",
    Timeout = "timeout",
    Permission = "permission",
    Other = "other",
    Plan = "plan",
}

/**
 * An error with a type and message.
 */
export class ListPipelinesPipelineListResponsePipelineErrors extends SpeakeasyBase {
    /**
     * A human-readable error message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    /**
     * The type of error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: ListPipelinesPipelineListResponsePipelineErrorsType;
}

/**
 * The current state of the pipeline.
 */
export enum ListPipelinesPipelineListResponsePipelineState {
    Created = "created",
    Errored = "errored",
    SetupPending = "setup-pending",
    Setup = "setup",
    Pending = "pending",
}

/**
 * The user who triggered the Pipeline.
 */
export class ListPipelinesPipelineListResponsePipelineTriggerActor extends SpeakeasyBase {
    /**
     * URL to the user's avatar on the VCS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "avatar_url" })
    avatarUrl: string;

    /**
     * The login information for the user on the VCS.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "login" })
    login: string;
}

/**
 * The type of trigger.
 */
export enum ListPipelinesPipelineListResponsePipelineTriggerType {
    ScheduledPipeline = "scheduled_pipeline",
    Explicit = "explicit",
    Api = "api",
    Webhook = "webhook",
}

/**
 * A summary of the trigger.
 */
export class ListPipelinesPipelineListResponsePipelineTrigger extends SpeakeasyBase {
    /**
     * The user who triggered the Pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor" })
    @Type(() => ListPipelinesPipelineListResponsePipelineTriggerActor)
    actor: ListPipelinesPipelineListResponsePipelineTriggerActor;

    /**
     * The date and time the trigger was received.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "received_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    receivedAt: Date;

    /**
     * The type of trigger.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: ListPipelinesPipelineListResponsePipelineTriggerType;
}

/**
 * The latest commit in the pipeline.
 */
export class ListPipelinesPipelineListResponsePipelineVcsCommit extends SpeakeasyBase {
    /**
     * The body of the commit message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body: string;

    /**
     * The subject of the commit message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject: string;
}

/**
 * VCS information for the pipeline.
 */
export class ListPipelinesPipelineListResponsePipelineVcs extends SpeakeasyBase {
    /**
     * The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "branch" })
    branch?: string;

    /**
     * The latest commit in the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "commit" })
    @Type(() => ListPipelinesPipelineListResponsePipelineVcsCommit)
    commit?: ListPipelinesPipelineListResponsePipelineVcsCommit;

    /**
     * URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "origin_repository_url" })
    originRepositoryUrl: string;

    /**
     * Name of the VCS provider (e.g. GitHub, Bitbucket).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provider_name" })
    providerName: string;

    /**
     * The code review id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "review_id" })
    reviewId?: string;

    /**
     * The code review URL.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "review_url" })
    reviewUrl?: string;

    /**
     * The code revision the pipeline ran.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revision" })
    revision: string;

    /**
     * The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag?: string;

    /**
     * URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "target_repository_url" })
    targetRepositoryUrl: string;
}

/**
 * A pipeline response.
 */
export class ListPipelinesPipelineListResponsePipeline extends SpeakeasyBase {
    /**
     * The date and time the pipeline was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * A sequence of errors that have occurred within the pipeline.
     */
    @SpeakeasyMetadata({ elemType: ListPipelinesPipelineListResponsePipelineErrors })
    @Expose({ name: "errors" })
    @Type(() => ListPipelinesPipelineListResponsePipelineErrors)
    errors: ListPipelinesPipelineListResponsePipelineErrors[];

    /**
     * The unique ID of the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The number of the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "number" })
    number: number;

    /**
     * The project-slug for the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_slug" })
    projectSlug: string;

    /**
     * The current state of the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state: ListPipelinesPipelineListResponsePipelineState;

    /**
     * A summary of the trigger.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trigger" })
    @Type(() => ListPipelinesPipelineListResponsePipelineTrigger)
    trigger: ListPipelinesPipelineListResponsePipelineTrigger;

    @SpeakeasyMetadata()
    @Expose({ name: "trigger_parameters" })
    triggerParameters?: Record<string, any>;

    /**
     * The date and time the pipeline was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * VCS information for the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vcs" })
    @Type(() => ListPipelinesPipelineListResponsePipelineVcs)
    vcs?: ListPipelinesPipelineListResponsePipelineVcs;
}

/**
 * List of pipelines
 */
export class ListPipelinesPipelineListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ListPipelinesPipelineListResponsePipeline })
    @Expose({ name: "items" })
    @Type(() => ListPipelinesPipelineListResponsePipeline)
    items: ListPipelinesPipelineListResponsePipeline[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class ListPipelinesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A sequence of pipelines.
     */
    @SpeakeasyMetadata()
    pipelineListResponse?: ListPipelinesPipelineListResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    listPipelinesDefaultApplicationJSONObject?: ListPipelinesDefaultApplicationJSON;
}
