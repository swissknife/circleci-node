/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The time window used to calculate summary metrics.
 */
export enum GetProjectWorkflowJobMetricsReportingWindow {
    Last7Days = "last-7-days",
    Last90Days = "last-90-days",
    Last24Hours = "last-24-hours",
    Last30Days = "last-30-days",
    Last60Days = "last-60-days",
}

export class GetProjectWorkflowJobMetricsRequest extends SpeakeasyBase {
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
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;

    /**
     * The time window used to calculate summary metrics.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
    reportingWindow?: GetProjectWorkflowJobMetricsReportingWindow;

    /**
     * The name of the workflow.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow-name" })
    workflowName: string;
}

/**
 * Error response.
 */
export class GetProjectWorkflowJobMetricsDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Metrics relating to the duration of runs for a workflow job.
 */
export class GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics extends SpeakeasyBase {
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
 * Metrics relating to a workflow job's runs.
 */
export class GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics extends SpeakeasyBase {
    /**
     * Metrics relating to the duration of runs for a workflow job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration_metrics" })
    @Type(() => GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics)
    durationMetrics: GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics;

    /**
     * The number of failed runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "failed_runs" })
    failedRuns: number;

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
     * The total credits consumed by the job in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_credits_used" })
    totalCreditsUsed: number;

    /**
     * The total number of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

export class GetProjectWorkflowJobMetrics200ApplicationJSONItems extends SpeakeasyBase {
    /**
     * Metrics relating to a workflow job's runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    @Type(() => GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics)
    metrics: GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics;

    /**
     * The name of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

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
 * Paginated workflow job summary metrics.
 */
export class GetProjectWorkflowJobMetrics200ApplicationJSON extends SpeakeasyBase {
    /**
     * Job summary metrics.
     */
    @SpeakeasyMetadata({ elemType: GetProjectWorkflowJobMetrics200ApplicationJSONItems })
    @Expose({ name: "items" })
    @Type(() => GetProjectWorkflowJobMetrics200ApplicationJSONItems)
    items: GetProjectWorkflowJobMetrics200ApplicationJSONItems[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class GetProjectWorkflowJobMetricsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * A paginated list of summary metrics by workflow job.
     */
    @SpeakeasyMetadata()
    getProjectWorkflowJobMetrics200ApplicationJSONObject?: GetProjectWorkflowJobMetrics200ApplicationJSON;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    getProjectWorkflowJobMetricsDefaultApplicationJSONObject?: GetProjectWorkflowJobMetricsDefaultApplicationJSON;
}
