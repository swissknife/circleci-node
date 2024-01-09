/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListWorkflowJobsRequest extends SpeakeasyBase {
    /**
     * The unique ID of the workflow.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

/**
 * Error response.
 */
export class ListWorkflowJobsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The current status of the job.
 */
export enum ListWorkflowJobsStatus {
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
 * The type of job.
 */
export enum ListWorkflowJobsType {
    Build = "build",
    Approval = "approval",
}

/**
 * Job
 */
export class Job extends SpeakeasyBase {
    /**
     * The unique ID of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approval_request_id" })
    approvalRequestId?: string;

    /**
     * The unique ID of the user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approved_by" })
    approvedBy?: string;

    /**
     * The unique ID of the user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "canceled_by" })
    canceledBy?: string;

    /**
     * A sequence of the unique job IDs for the jobs that this job depends upon in the workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dependencies" })
    dependencies: string[];

    /**
     * The unique ID of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The number of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job_number" })
    jobNumber?: number;

    /**
     * The name of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The project-slug for the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_slug" })
    projectSlug: string;

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
    status: ListWorkflowJobsStatus;

    /**
     * The time when the job stopped.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stopped_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    stoppedAt?: Date;

    /**
     * The type of job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: ListWorkflowJobsType;
}

/**
 * A paginated sequence of jobs.
 */
export class ListWorkflowJobsWorkflowJobListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Job })
    @Expose({ name: "items" })
    @Type(() => Job)
    items: Job[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class ListWorkflowJobsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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
     * A paginated sequence of jobs.
     */
    @SpeakeasyMetadata()
    workflowJobListResponse?: ListWorkflowJobsWorkflowJobListResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    object?: ListWorkflowJobsResponseBody;
}
