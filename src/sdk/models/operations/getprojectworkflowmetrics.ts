/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The time window used to calculate summary metrics. If not provided, defaults to last-90-days
 */
export enum GetProjectWorkflowMetricsQueryParamReportingWindow {
    Last7Days = "last-7-days",
    Last90Days = "last-90-days",
    Last24Hours = "last-24-hours",
    Last30Days = "last-30-days",
    Last60Days = "last-60-days",
}

export class GetProjectWorkflowMetricsRequest extends SpeakeasyBase {
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
     * The time window used to calculate summary metrics. If not provided, defaults to last-90-days
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
    reportingWindow?: GetProjectWorkflowMetricsQueryParamReportingWindow;
}

/**
 * Error response.
 */
export class GetProjectWorkflowMetricsInsightsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Metrics relating to the duration of runs for a workflow.
 */
export class GetProjectWorkflowMetricsDurationMetrics extends SpeakeasyBase {
    /**
     * The max duration, in seconds, among a group of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max" })
    max: number;

    /**
     * The mean duration, in seconds, among a group of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mean" })
    mean: number;

    /**
     * The median duration, in seconds, among a group of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "median" })
    median: number;

    /**
     * The minimum duration, in seconds, among a group of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "min" })
    min: number;

    /**
     * The 95th percentile duration, in seconds, among a group of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "p95" })
    p95: number;

    /**
     * The standard deviation, in seconds, among a group of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "standard_deviation" })
    standardDeviation: number;
}

/**
 * Metrics relating to a workflow's runs.
 */
export class GetProjectWorkflowMetricsMetrics extends SpeakeasyBase {
    /**
     * Metrics relating to the duration of runs for a workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration_metrics" })
    @Type(() => GetProjectWorkflowMetricsDurationMetrics)
    durationMetrics: GetProjectWorkflowMetricsDurationMetrics;

    /**
     * The number of failed runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "failed_runs" })
    failedRuns: number;

    /**
     * The mean time to recovery (mean time between failures and their next success) in seconds.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mttr" })
    mttr: number;

    @SpeakeasyMetadata()
    @Expose({ name: "success_rate" })
    successRate: number;

    /**
     * The number of successful runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "successful_runs" })
    successfulRuns: number;

    /**
     * The average number of runs per day.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "throughput" })
    throughput: number;

    /**
     * The total credits consumed by the workflow in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_credits_used" })
    totalCreditsUsed: number;

    /**
     * The number of recovered workflow executions per day.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_recoveries" })
    totalRecoveries: number;

    /**
     * The total number of runs, including runs that are still on-hold or running.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

export class GetProjectWorkflowMetricsItems extends SpeakeasyBase {
    /**
     * Metrics relating to a workflow's runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    @Type(() => GetProjectWorkflowMetricsMetrics)
    metrics: GetProjectWorkflowMetricsMetrics;

    /**
     * The name of the workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The unique ID of the project
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId: any;

    /**
     * The timestamp of the last build within the requested reporting window.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "window_end" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    windowEnd: Date;

    /**
     * The timestamp of the first build within the requested reporting window.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "window_start" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    windowStart: Date;
}

/**
 * Paginated workflow summary metrics.
 */
export class GetProjectWorkflowMetricsResponseBody extends SpeakeasyBase {
    /**
     * Workflow summary metrics.
     */
    @SpeakeasyMetadata({ elemType: GetProjectWorkflowMetricsItems })
    @Expose({ name: "items" })
    @Type(() => GetProjectWorkflowMetricsItems)
    items: GetProjectWorkflowMetricsItems[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class GetProjectWorkflowMetricsResponse extends SpeakeasyBase {
    /**
     * A paginated list of summary metrics by workflow
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: GetProjectWorkflowMetricsResponseBody;

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
    defaultApplicationJsonObject?: GetProjectWorkflowMetricsInsightsResponseBody;
}
