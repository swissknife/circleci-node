import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetProjectWorkflowMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}
export enum GetProjectWorkflowMetricsReportingWindowEnum {
    Last7Days = "last-7-days",
    Last90Days = "last-90-days",
    Last24Hours = "last-24-hours",
    Last30Days = "last-30-days",
    Last60Days = "last-60-days"
}

export class GetProjectWorkflowMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all-branches" })
  allBranches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
  reportingWindow?: GetProjectWorkflowMetricsReportingWindowEnum;
}

export class GetProjectWorkflowMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowMetricsQueryParams;
}

export class GetProjectWorkflowMetricsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetProjectWorkflowMetrics200ApplicationJSONItemsMetricsDurationMetrics
/** 
 * Metrics relating to the duration of runs for a workflow.
**/
export class GetProjectWorkflowMetrics200ApplicationJSONItemsMetricsDurationMetrics extends SpeakeasyBase {
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

// GetProjectWorkflowMetrics200ApplicationJSONItemsMetrics
/** 
 * Metrics relating to a workflow's runs.
**/
export class GetProjectWorkflowMetrics200ApplicationJSONItemsMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duration_metrics" })
  @Type(() => GetProjectWorkflowMetrics200ApplicationJSONItemsMetricsDurationMetrics)
  durationMetrics: GetProjectWorkflowMetrics200ApplicationJSONItemsMetricsDurationMetrics;

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
  @Expose({ name: "total_recoveries" })
  totalRecoveries: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

export class GetProjectWorkflowMetrics200ApplicationJSONItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetProjectWorkflowMetrics200ApplicationJSONItemsMetrics)
  metrics: GetProjectWorkflowMetrics200ApplicationJSONItemsMetrics;

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

// GetProjectWorkflowMetrics200ApplicationJSON
/** 
 * Paginated workflow summary metrics.
**/
export class GetProjectWorkflowMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetProjectWorkflowMetrics200ApplicationJSONItems })
  @Expose({ name: "items" })
  @Type(() => GetProjectWorkflowMetrics200ApplicationJSONItems)
  items: GetProjectWorkflowMetrics200ApplicationJSONItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class GetProjectWorkflowMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectWorkflowMetrics200ApplicationJSONObject?: GetProjectWorkflowMetrics200ApplicationJSON;

  @SpeakeasyMetadata()
  getProjectWorkflowMetricsDefaultApplicationJSONObject?: GetProjectWorkflowMetricsDefaultApplicationJSON;
}