import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// GetProjectWorkflowMetrics200ApplicationJSONItemsMetricsDurationMetrics
/** 
 * Metrics relating to the duration of runs for a workflow.
**/
export class GetProjectWorkflowMetrics200ApplicationJSONItemsMetricsDurationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=mean" })
  mean: number;

  @SpeakeasyMetadata({ data: "json, name=median" })
  median: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min: number;

  @SpeakeasyMetadata({ data: "json, name=p95" })
  p95: number;

  @SpeakeasyMetadata({ data: "json, name=standard_deviation" })
  standardDeviation: number;
}

// GetProjectWorkflowMetrics200ApplicationJSONItemsMetrics
/** 
 * Metrics relating to a workflow's runs.
**/
export class GetProjectWorkflowMetrics200ApplicationJSONItemsMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration_metrics" })
  durationMetrics: GetProjectWorkflowMetrics200ApplicationJSONItemsMetricsDurationMetrics;

  @SpeakeasyMetadata({ data: "json, name=failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata({ data: "json, name=mttr" })
  mttr: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=successful_runs" })
  successfulRuns: number;

  @SpeakeasyMetadata({ data: "json, name=throughput" })
  throughput: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_recoveries" })
  totalRecoveries: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

export class GetProjectWorkflowMetrics200ApplicationJSONItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetProjectWorkflowMetrics200ApplicationJSONItemsMetrics;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=window_end" })
  windowEnd: Date;

  @SpeakeasyMetadata({ data: "json, name=window_start" })
  windowStart: Date;
}

// GetProjectWorkflowMetrics200ApplicationJSON
/** 
 * Paginated workflow summary metrics.
**/
export class GetProjectWorkflowMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetProjectWorkflowMetrics200ApplicationJSONItems })
  items: GetProjectWorkflowMetrics200ApplicationJSONItems[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
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