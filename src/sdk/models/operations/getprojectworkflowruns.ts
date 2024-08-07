/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetProjectWorkflowRunsRequest extends SpeakeasyBase {
    /**
     * Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all-branches" })
    allBranches?: boolean;

    /**
     * The name of a vcs branch. If not passed we will scope the API call to the default branch.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
    branch?: string;

    /**
     * Include only executions that started before this date. This date can be at most 90 days after the start-date.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-date" })
    endDate?: Date;

    /**
     * A token to retrieve the next page of results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
    pageToken?: string;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;

    /**
     * Include only executions that started at or after this date. This must be specified if an end-date is provided.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-date" })
    startDate?: Date;

    /**
     * The name of the workflow.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow-name" })
    workflowName: string;
}

/**
 * Error response.
 */
export class GetProjectWorkflowRunsInsightsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Workflow status.
 */
export enum GetProjectWorkflowRunsStatus {
    Success = "success",
    Failed = "failed",
    Error = "error",
    Canceled = "canceled",
    Unauthorized = "unauthorized",
}

export class GetProjectWorkflowRunsItems extends SpeakeasyBase {
    /**
     * The VCS branch of a Workflow's trigger.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "branch" })
    branch: string;

    /**
     * The date and time the workflow was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * The number of credits used during execution. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "credits_used" })
    creditsUsed: number;

    /**
     * The duration in seconds of a run.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration: number;

    /**
     * The unique ID of the workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Describes if the job is an approval job or not. Approval jobs are intermediary jobs that are created to pause the workflow until approved.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_approval" })
    isApproval: boolean;

    /**
     * Workflow status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: GetProjectWorkflowRunsStatus;

    /**
     * The date and time the workflow stopped.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stopped_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    stoppedAt: Date;
}

/**
 * Paginated recent workflow runs.
 */
export class GetProjectWorkflowRunsResponseBody extends SpeakeasyBase {
    /**
     * Recent workflow runs.
     */
    @SpeakeasyMetadata({ elemType: GetProjectWorkflowRunsItems })
    @Expose({ name: "items" })
    @Type(() => GetProjectWorkflowRunsItems)
    items: GetProjectWorkflowRunsItems[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class GetProjectWorkflowRunsResponse extends SpeakeasyBase {
    /**
     * A paginated list of recent workflow runs
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: GetProjectWorkflowRunsResponseBody;

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
     * Error response.
     */
    @SpeakeasyMetadata()
    defaultApplicationJsonObject?: GetProjectWorkflowRunsInsightsResponseBody;
}
