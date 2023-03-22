/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetWorkflowSummaryRequest extends SpeakeasyBase {
  /**
   * Whether to retrieve data for all branches combined. Use either this parameter OR the branch name parameter.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=all-branches",
  })
  allBranches?: boolean;

  /**
   * The names of VCS branches to include in branch-level workflow metrics.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=branches",
  })
  branches?: Record<string, any>;

  /**
   * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;

  /**
   * The name of the workflow.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workflow-name",
  })
  workflowName: string;
}

/**
 * Error response.
 */
export class GetWorkflowSummaryDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * Metrics relating to the duration of runs for a workflow.
 */
export class GetWorkflowSummary200ApplicationJSONMetricsDurationMetrics extends SpeakeasyBase {
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
 * Metrics aggregated across a workflow for a given time window.
 */
export class GetWorkflowSummary200ApplicationJSONMetrics extends SpeakeasyBase {
  /**
   * Metrics relating to the duration of runs for a workflow.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duration_metrics" })
  @Type(() => GetWorkflowSummary200ApplicationJSONMetricsDurationMetrics)
  durationMetrics: GetWorkflowSummary200ApplicationJSONMetricsDurationMetrics;

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
   * The total number of runs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;

  /**
   * The end of the aggregation window for workflow metrics.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "window_end" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  windowEnd: Date;

  /**
   * The start of the aggregation window for workflow metrics.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "window_start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  windowStart: Date;
}

/**
 * Trends for aggregated metrics across a workflow for a given time window.
 */
export class GetWorkflowSummary200ApplicationJSONTrends extends SpeakeasyBase {
  /**
   * The trend value for number of failed runs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "failed_runs" })
  failedRuns: number;

  /**
   * Trend value for the 50th percentile duration for a workflow for a given time window.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "median_duration_secs" })
  medianDurationSecs: number;

  /**
   * trend for mean time to recovery (mean time between failures and their next success).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mttr" })
  mttr: number;

  /**
   * Trend value for the 95th percentile duration for a workflow for a given time window.
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
   * The trend value for total number of runs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

/**
 * Workflow level aggregated metrics and trends response
 */
export class GetWorkflowSummary200ApplicationJSON extends SpeakeasyBase {
  /**
   * Metrics aggregated across a workflow for a given time window.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetWorkflowSummary200ApplicationJSONMetrics)
  metrics: GetWorkflowSummary200ApplicationJSONMetrics;

  /**
   * Trends for aggregated metrics across a workflow for a given time window.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetWorkflowSummary200ApplicationJSONTrends)
  trends: GetWorkflowSummary200ApplicationJSONTrends;

  /**
   * A list of all the workflow names for a given project.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workflow_names" })
  workflowNames: string[];
}

export class GetWorkflowSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Metrics and trends for a workflow
   */
  @SpeakeasyMetadata()
  getWorkflowSummary200ApplicationJSONObject?: GetWorkflowSummary200ApplicationJSON;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  getWorkflowSummaryDefaultApplicationJSONObject?: GetWorkflowSummaryDefaultApplicationJSON;
}
