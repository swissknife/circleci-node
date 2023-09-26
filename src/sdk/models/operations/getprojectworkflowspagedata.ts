/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The names of VCS branches to include in branch-level workflow metrics.
 */
export class GetProjectWorkflowsPageDataBranches extends SpeakeasyBase {}

/**
 * The time window used to calculate summary metrics.
 */
export enum GetProjectWorkflowsPageDataReportingWindow {
    Last7Days = "last-7-days",
    Last90Days = "last-90-days",
    Last24Hours = "last-24-hours",
    Last30Days = "last-30-days",
    Last60Days = "last-60-days",
}

/**
 * The names of workflows to include in workflow-level metrics.
 */
export class GetProjectWorkflowsPageDataWorkflowNames extends SpeakeasyBase {}

export class GetProjectWorkflowsPageDataRequest extends SpeakeasyBase {
    /**
     * The names of VCS branches to include in branch-level workflow metrics.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branches" })
    branches?: GetProjectWorkflowsPageDataBranches;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;

    /**
     * The time window used to calculate summary metrics.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
    reportingWindow?: GetProjectWorkflowsPageDataReportingWindow;

    /**
     * The names of workflows to include in workflow-level metrics.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workflow-names" })
    workflowNames?: GetProjectWorkflowsPageDataWorkflowNames;
}

/**
 * Error response.
 */
export class GetProjectWorkflowsPageDataDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Metrics aggregated across all workflows and branches for a project.
 */
export class GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics extends SpeakeasyBase {
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
 * Metric trends aggregated across all workflows and branches for a project.
 */
export class GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends extends SpeakeasyBase {
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
 * Metrics and trends data aggregated for a given project.
 */
export class GetProjectWorkflowsPageData200ApplicationJSONProjectData extends SpeakeasyBase {
    /**
     * Metrics aggregated across all workflows and branches for a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics)
    metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics;

    /**
     * Metric trends aggregated across all workflows and branches for a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trends" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends)
    trends: GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends;
}

/**
 * Metrics aggregated across a workflow or branchfor a project.
 */
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics extends SpeakeasyBase {
    /**
     * The 95th percentile duration among a group of workflow runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "p95_duration_secs" })
    p95DurationSecs: number;

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
     * The total number of runs, including runs that are still on-hold or running.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

/**
 * Trends aggregated across a workflow or branch for a project.
 */
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends extends SpeakeasyBase {
    /**
     * The 95th percentile duration among a group of workflow runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "p95_duration_secs" })
    p95DurationSecs: number;

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
     * The trend value for total number of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData extends SpeakeasyBase {
    /**
     * The VCS branch of a workflow's trigger.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "branch" })
    branch: string;

    /**
     * Metrics aggregated across a workflow or branchfor a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics)
    metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics;

    /**
     * Trends aggregated across a workflow or branch for a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trends" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends)
    trends: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends;

    /**
     * The name of the workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow_name" })
    workflowName: string;
}

/**
 * Metrics aggregated across a workflow or branchfor a project.
 */
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics extends SpeakeasyBase {
    /**
     * The 95th percentile duration among a group of workflow runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "p95_duration_secs" })
    p95DurationSecs: number;

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
     * The total number of runs, including runs that are still on-hold or running.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

/**
 * Trends aggregated across a workflow or branch for a project.
 */
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends extends SpeakeasyBase {
    /**
     * The 95th percentile duration among a group of workflow runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "p95_duration_secs" })
    p95DurationSecs: number;

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
     * The trend value for total number of runs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_runs" })
    totalRuns: number;
}

export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData extends SpeakeasyBase {
    /**
     * Metrics aggregated across a workflow or branchfor a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics)
    metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics;

    /**
     * Trends aggregated across a workflow or branch for a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trends" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends)
    trends: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends;

    /**
     * The name of the workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow_name" })
    workflowName: string;
}

/**
 * Aggregated summary metrics and trends by workflow and branches
 */
export class GetProjectWorkflowsPageData200ApplicationJSON extends SpeakeasyBase {
    /**
     * A list of all the branches for a given project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "all_branches" })
    allBranches?: string[];

    /**
     * A list of all the workflows for a given project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "all_workflows" })
    allWorkflows?: string[];

    /**
     * The unique ID of the organization
     */
    @SpeakeasyMetadata()
    @Expose({ name: "org_id" })
    orgId?: any;

    /**
     * Metrics and trends data aggregated for a given project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_data" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectData)
    projectData?: GetProjectWorkflowsPageData200ApplicationJSONProjectData;

    /**
     * The unique ID of the project
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId?: any;

    /**
     * A list of metrics and trends data for branches for a given project.
     */
    @SpeakeasyMetadata({
        elemType: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData,
    })
    @Expose({ name: "project_workflow_branch_data" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData)
    projectWorkflowBranchData?: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData[];

    /**
     * A list of metrics and trends data for workflows for a given project.
     */
    @SpeakeasyMetadata({
        elemType: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData,
    })
    @Expose({ name: "project_workflow_data" })
    @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData)
    projectWorkflowData?: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData[];
}

export class GetProjectWorkflowsPageDataResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

    /**
     * Aggregated summary metrics and trends by workflow and branches
     */
    @SpeakeasyMetadata()
    getProjectWorkflowsPageData200ApplicationJSONObject?: GetProjectWorkflowsPageData200ApplicationJSON;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    getProjectWorkflowsPageDataDefaultApplicationJSONObject?: GetProjectWorkflowsPageDataDefaultApplicationJSON;
}
