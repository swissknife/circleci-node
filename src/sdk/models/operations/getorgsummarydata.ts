/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * List of project names.
 */
export class ProjectNames extends SpeakeasyBase {}

/**
 * The time window used to calculate summary metrics. If not provided, defaults to last-90-days
 */
export enum ReportingWindow {
    Last7Days = "last-7-days",
    Last90Days = "last-90-days",
    Last24Hours = "last-24-hours",
    Last30Days = "last-30-days",
    Last60Days = "last-60-days",
}

export class GetOrgSummaryDataRequest extends SpeakeasyBase {
    /**
     * Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org-slug" })
    orgSlug: string;

    /**
     * List of project names.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project-names" })
    projectNames?: ProjectNames;

    /**
     * The time window used to calculate summary metrics. If not provided, defaults to last-90-days
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
    reportingWindow?: ReportingWindow;
}

/**
 * Error response.
 */
export class GetOrgSummaryDataInsightsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Metrics for a single org metrics.
 */
export class GetOrgSummaryDataMetrics extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "success_rate" })
    successRate: number;

    /**
     * The average number of runs per day.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "throughput" })
    throughput: number;

    /**
     * The total credits consumed over the current timeseries interval.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_credits_used" })
    totalCreditsUsed: number;

    /**
     * Total duration, in seconds.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_duration_secs" })
    totalDurationSecs: number;

    /**
     * The total number of runs, including runs that are still on-hold or running.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

/**
 * Trends for a single org.
 */
export class GetOrgSummaryDataInsightsTrends extends SpeakeasyBase {
    /**
     * The trend value for the success rate.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success_rate" })
    successRate: number;

    /**
     * Trend value for the average number of runs per day.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "throughput" })
    throughput: number;

    /**
     * The trend value for total credits consumed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_credits_used" })
    totalCreditsUsed: number;

    /**
     * Trend value for total duration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_duration_secs" })
    totalDurationSecs: number;

    /**
     * The trend value for total number of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

/**
 * Aggregated metrics for an org, with trends.
 */
export class OrgData extends SpeakeasyBase {
    /**
     * Metrics for a single org metrics.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    @Type(() => GetOrgSummaryDataMetrics)
    metrics: GetOrgSummaryDataMetrics;

    /**
     * Trends for a single org.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trends" })
    @Type(() => GetOrgSummaryDataInsightsTrends)
    trends: GetOrgSummaryDataInsightsTrends;
}

/**
 * Metrics for a single project, across all branches.
 */
export class GetOrgSummaryDataInsightsMetrics extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "success_rate" })
    successRate: number;

    /**
     * The total credits consumed over the current timeseries interval.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_credits_used" })
    totalCreditsUsed: number;

    /**
     * Total duration, in seconds.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_duration_secs" })
    totalDurationSecs: number;

    /**
     * The total number of runs, including runs that are still on-hold or running.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

/**
 * Trends for a single project, across all branches.
 */
export class GetOrgSummaryDataTrends extends SpeakeasyBase {
    /**
     * The trend value for the success rate.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success_rate" })
    successRate: number;

    /**
     * The trend value for total credits consumed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_credits_used" })
    totalCreditsUsed: number;

    /**
     * Trend value for total duration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_duration_secs" })
    totalDurationSecs: number;

    /**
     * The trend value for total number of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

export class OrgProjectData extends SpeakeasyBase {
    /**
     * Metrics for a single project, across all branches.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    @Type(() => GetOrgSummaryDataInsightsMetrics)
    metrics: GetOrgSummaryDataInsightsMetrics;

    /**
     * The name of the project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_name" })
    projectName: string;

    /**
     * Trends for a single project, across all branches.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trends" })
    @Type(() => GetOrgSummaryDataTrends)
    trends: GetOrgSummaryDataTrends;
}

/**
 * Summary metrics with trends for the entire org, and for each project.
 */
export class GetOrgSummaryDataResponseBody extends SpeakeasyBase {
    /**
     * A list of all the project names in the organization.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "all_projects" })
    allProjects: string[];

    /**
     * Aggregated metrics for an org, with trends.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org_data" })
    @Type(() => OrgData)
    orgData: OrgData;

    /**
     * Metrics for a single project, across all branches
     */
    @SpeakeasyMetadata({ elemType: OrgProjectData })
    @Expose({ name: "org_project_data" })
    @Type(() => OrgProjectData)
    orgProjectData: OrgProjectData[];
}

export class GetOrgSummaryDataResponse extends SpeakeasyBase {
    /**
     * summary metrics with trends for an entire org and it's projects.
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: GetOrgSummaryDataResponseBody;

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
    defaultApplicationJsonObject?: GetOrgSummaryDataInsightsResponseBody;
}
