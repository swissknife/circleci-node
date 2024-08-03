/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetJobDetailsRequest extends SpeakeasyBase {
    /**
     * The number of the job.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-number" })
    jobNumber: any;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class GetJobDetailsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Information about the context.
 */
export class Contexts extends SpeakeasyBase {
    /**
     * The name of the context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Information about executor used for a job.
 */
export class Executor extends SpeakeasyBase {
    /**
     * Resource class name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_class" })
    resourceClass: string;

    /**
     * Executor type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;
}

/**
 * Info about the latest workflow the job was a part of.
 */
export class LatestWorkflow extends SpeakeasyBase {
    /**
     * The unique ID of the workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The name of the workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Message from CircleCI execution platform.
 */
export class Messages extends SpeakeasyBase {
    /**
     * Information describing message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    /**
     * Value describing the reason for message to be added to the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;

    /**
     * Message type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}

/**
 * Information about an organization.
 */
export class Organization extends SpeakeasyBase {
    /**
     * The name of the organization.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Info about a status of the parallel run.
 */
export class ParallelRuns extends SpeakeasyBase {
    /**
     * Index of the parallel run.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "index" })
    index: number;

    /**
     * Status of the parallel run.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: string;
}

/**
 * Info about a pipeline the job is a part of.
 */
export class Pipeline extends SpeakeasyBase {
    /**
     * The unique ID of the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

/**
 * Information about a project.
 */
export class Project extends SpeakeasyBase {
    /**
     * URL to the repository hosting the project's code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "external_url" })
    externalUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The name of the project
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;
}

/**
 * The current status of the job.
 */
export enum Status {
    Success = "success",
    Running = "running",
    NotRun = "not_run",
    Failed = "failed",
    Retried = "retried",
    Queued = "queued",
    NotRunning = "not_running",
    InfrastructureFail = "infrastructure_fail",
    Timedout = "timedout",
    OnHold = "on_hold",
    TerminatedUnknown = "terminated-unknown",
    Blocked = "blocked",
    Canceled = "canceled",
    Unauthorized = "unauthorized",
}

/**
 * Job Details
 */
export class GetJobDetailsJobDetails extends SpeakeasyBase {
    /**
     * List of contexts used by the job.
     */
    @SpeakeasyMetadata({ elemType: Contexts })
    @Expose({ name: "contexts" })
    @Type(() => Contexts)
    contexts: Contexts[];

    /**
     * The time when the job was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Duration of a job in milliseconds.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration: number;

    /**
     * Information about executor used for a job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "executor" })
    @Type(() => Executor)
    executor: Executor;

    /**
     * Info about the latest workflow the job was a part of.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latest_workflow" })
    @Type(() => LatestWorkflow)
    latestWorkflow: LatestWorkflow;

    /**
     * Messages from CircleCI execution platform.
     */
    @SpeakeasyMetadata({ elemType: Messages })
    @Expose({ name: "messages" })
    @Type(() => Messages)
    messages: Messages[];

    /**
     * The name of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The number of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "number" })
    number: number;

    /**
     * Information about an organization.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "organization" })
    @Type(() => Organization)
    organization: Organization;

    /**
     * Info about parallels runs and their status.
     */
    @SpeakeasyMetadata({ elemType: ParallelRuns })
    @Expose({ name: "parallel_runs" })
    @Type(() => ParallelRuns)
    parallelRuns: ParallelRuns[];

    /**
     * A number of parallel runs the job has.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parallelism" })
    parallelism: number;

    /**
     * Info about a pipeline the job is a part of.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pipeline" })
    @Type(() => Pipeline)
    pipeline: Pipeline;

    /**
     * Information about a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    @Type(() => Project)
    project: Project;

    /**
     * The time when the job was placed in a queue.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "queued_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    queuedAt: Date;

    /**
     * The date and time the job started.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "started_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startedAt: Date;

    /**
     * The current status of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: Status;

    /**
     * The time when the job stopped.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stopped_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    stoppedAt?: Date;

    /**
     * URL of the job in CircleCI Web UI.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "web_url" })
    webUrl: string;
}

export class GetJobDetailsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Job details.
     */
    @SpeakeasyMetadata()
    jobDetails?: GetJobDetailsJobDetails;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    object?: GetJobDetailsResponseBody;
}
