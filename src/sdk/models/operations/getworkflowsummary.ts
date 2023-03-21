import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetWorkflowSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workflow-name",
  })
  workflowName: string;
}

export class GetWorkflowSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=all-branches",
  })
  allBranches?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=branches",
  })
  branches?: Record<string, any>;
}

export class GetWorkflowSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkflowSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkflowSummaryQueryParams;
}

export class GetWorkflowSummaryDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetWorkflowSummary200ApplicationJSONMetricsDurationMetrics
/**
 * Metrics relating to the duration of runs for a workflow.
 **/
export class GetWorkflowSummary200ApplicationJSONMetricsDurationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max: number;

  @SpeakeasyMetadata()
  @Expose({ name: "mean" })
  mean: number;

  @SpeakeasyMetadata()
  @Expose({ name: "median" })
  median: number;

  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min: number;

  @SpeakeasyMetadata()
  @Expose({ name: "p95" })
  p95: number;

  @SpeakeasyMetadata()
  @Expose({ name: "standard_deviation" })
  standardDeviation: number;
}

// GetWorkflowSummary200ApplicationJSONMetrics
/**
 * Metrics aggregated across a workflow for a given time window.
 **/
export class GetWorkflowSummary200ApplicationJSONMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duration_metrics" })
  @Type(() => GetWorkflowSummary200ApplicationJSONMetricsDurationMetrics)
  durationMetrics: GetWorkflowSummary200ApplicationJSONMetricsDurationMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata()
  @Expose({ name: "mttr" })
  mttr: number;

  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "successful_runs" })
  successfulRuns: number;

  @SpeakeasyMetadata()
  @Expose({ name: "throughput" })
  throughput: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;

  @SpeakeasyMetadata()
  @Expose({ name: "window_end" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  windowEnd: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "window_start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  windowStart: Date;
}

// GetWorkflowSummary200ApplicationJSONTrends
/**
 * Trends for aggregated metrics across a workflow for a given time window.
 **/
export class GetWorkflowSummary200ApplicationJSONTrends extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata()
  @Expose({ name: "median_duration_secs" })
  medianDurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "mttr" })
  mttr: number;

  @SpeakeasyMetadata()
  @Expose({ name: "p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "throughput" })
  throughput: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

// GetWorkflowSummary200ApplicationJSON
/**
 * Workflow level aggregated metrics and trends response
 **/
export class GetWorkflowSummary200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetWorkflowSummary200ApplicationJSONMetrics)
  metrics: GetWorkflowSummary200ApplicationJSONMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetWorkflowSummary200ApplicationJSONTrends)
  trends: GetWorkflowSummary200ApplicationJSONTrends;

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

  @SpeakeasyMetadata()
  getWorkflowSummary200ApplicationJSONObject?: GetWorkflowSummary200ApplicationJSON;

  @SpeakeasyMetadata()
  getWorkflowSummaryDefaultApplicationJSONObject?: GetWorkflowSummaryDefaultApplicationJSON;
}
