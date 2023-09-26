/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetPipelineByNumberRequest extends SpeakeasyBase {
    /**
     * The number of the pipeline.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline-number" })
    pipelineNumber: any;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class GetPipelineByNumberDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The type of error.
 */
export enum GetPipelineByNumberPipelineErrorsType {
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
export class GetPipelineByNumberPipelineErrors extends SpeakeasyBase {
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
    type: GetPipelineByNumberPipelineErrorsType;
}

/**
 * The current state of the pipeline.
 */
export enum GetPipelineByNumberPipelineState {
    Created = "created",
    Errored = "errored",
    SetupPending = "setup-pending",
    Setup = "setup",
    Pending = "pending",
}

/**
 * The user who triggered the Pipeline.
 */
export class GetPipelineByNumberPipelineTriggerActor extends SpeakeasyBase {
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
export enum GetPipelineByNumberPipelineTriggerType {
    ScheduledPipeline = "scheduled_pipeline",
    Explicit = "explicit",
    Api = "api",
    Webhook = "webhook",
}

/**
 * A summary of the trigger.
 */
export class GetPipelineByNumberPipelineTrigger extends SpeakeasyBase {
    /**
     * The user who triggered the Pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor" })
    @Type(() => GetPipelineByNumberPipelineTriggerActor)
    actor: GetPipelineByNumberPipelineTriggerActor;

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
    type: GetPipelineByNumberPipelineTriggerType;
}

/**
 * The latest commit in the pipeline.
 */
export class GetPipelineByNumberPipelineVcsCommit extends SpeakeasyBase {
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
export class GetPipelineByNumberPipelineVcs extends SpeakeasyBase {
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
    @Type(() => GetPipelineByNumberPipelineVcsCommit)
    commit?: GetPipelineByNumberPipelineVcsCommit;

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
export class GetPipelineByNumberPipeline extends SpeakeasyBase {
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
    @SpeakeasyMetadata({ elemType: GetPipelineByNumberPipelineErrors })
    @Expose({ name: "errors" })
    @Type(() => GetPipelineByNumberPipelineErrors)
    errors: GetPipelineByNumberPipelineErrors[];

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
    state: GetPipelineByNumberPipelineState;

    /**
     * A summary of the trigger.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trigger" })
    @Type(() => GetPipelineByNumberPipelineTrigger)
    trigger: GetPipelineByNumberPipelineTrigger;

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
    @Type(() => GetPipelineByNumberPipelineVcs)
    vcs?: GetPipelineByNumberPipelineVcs;
}

export class GetPipelineByNumberResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A pipeline object.
     */
    @SpeakeasyMetadata()
    pipeline?: GetPipelineByNumberPipeline;

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
    getPipelineByNumberDefaultApplicationJSONObject?: GetPipelineByNumberDefaultApplicationJSON;
}
