import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetProjectWorkflowJobMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workflow-name",
  })
  workflowName: string;
}
export enum GetProjectWorkflowJobMetricsReportingWindowEnum {
  Last7Days = "last-7-days",
  Last90Days = "last-90-days",
  Last24Hours = "last-24-hours",
  Last30Days = "last-30-days",
  Last60Days = "last-60-days",
}

export class GetProjectWorkflowJobMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=all-branches",
  })
  allBranches?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=branch",
  })
  branch?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page-token",
  })
  pageToken?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reporting-window",
  })
  reportingWindow?: GetProjectWorkflowJobMetricsReportingWindowEnum;
}

export class GetProjectWorkflowJobMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowJobMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowJobMetricsQueryParams;
}

export class GetProjectWorkflowJobMetricsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics
/**
 * Metrics relating to the duration of runs for a workflow job.
 **/
export class GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics extends SpeakeasyBase {
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

// GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics
/**
 * Metrics relating to a workflow job's runs.
 **/
export class GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duration_metrics" })
  @Type(
    () =>
      GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics
  )
  durationMetrics: GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "failed_runs" })
  failedRuns: number;

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
}

export class GetProjectWorkflowJobMetrics200ApplicationJSONItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics)
  metrics: GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "window_end" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  windowEnd: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "window_start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  windowStart: Date;
}

// GetProjectWorkflowJobMetrics200ApplicationJSON
/**
 * Paginated workflow job summary metrics.
 **/
export class GetProjectWorkflowJobMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetProjectWorkflowJobMetrics200ApplicationJSONItems,
  })
  @Expose({ name: "items" })
  @Type(() => GetProjectWorkflowJobMetrics200ApplicationJSONItems)
  items: GetProjectWorkflowJobMetrics200ApplicationJSONItems[];

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

  @SpeakeasyMetadata()
  getProjectWorkflowJobMetrics200ApplicationJSONObject?: GetProjectWorkflowJobMetrics200ApplicationJSON;

  @SpeakeasyMetadata()
  getProjectWorkflowJobMetricsDefaultApplicationJSONObject?: GetProjectWorkflowJobMetricsDefaultApplicationJSON;
}
