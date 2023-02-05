import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetProjectWorkflowJobMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow-name" })
  workflowName: string;
}
export enum GetProjectWorkflowJobMetricsReportingWindowEnum {
    Last7Days = "last-7-days",
    Last90Days = "last-90-days",
    Last24Hours = "last-24-hours",
    Last30Days = "last-30-days",
    Last60Days = "last-60-days"
}

export class GetProjectWorkflowJobMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all-branches" })
  allBranches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
  reportingWindow?: GetProjectWorkflowJobMetricsReportingWindowEnum;
}

export class GetProjectWorkflowJobMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowJobMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowJobMetricsQueryParams;
}

export class GetProjectWorkflowJobMetricsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics
/** 
 * Metrics relating to the duration of runs for a workflow job.
**/
export class GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics extends SpeakeasyBase {
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

// GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics
/** 
 * Metrics relating to a workflow job's runs.
**/
export class GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration_metrics" })
  durationMetrics: GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics;

  @SpeakeasyMetadata({ data: "json, name=failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=successful_runs" })
  successfulRuns: number;

  @SpeakeasyMetadata({ data: "json, name=throughput" })
  throughput: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

export class GetProjectWorkflowJobMetrics200ApplicationJSONItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=window_end" })
  windowEnd: Date;

  @SpeakeasyMetadata({ data: "json, name=window_start" })
  windowStart: Date;
}

// GetProjectWorkflowJobMetrics200ApplicationJSON
/** 
 * Paginated workflow job summary metrics.
**/
export class GetProjectWorkflowJobMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetProjectWorkflowJobMetrics200ApplicationJSONItems })
  items: GetProjectWorkflowJobMetrics200ApplicationJSONItems[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}

export class GetProjectWorkflowJobMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectWorkflowJobMetrics200ApplicationJSONObject?: GetProjectWorkflowJobMetrics200ApplicationJSON;

  @SpeakeasyMetadata()
  getProjectWorkflowJobMetricsDefaultApplicationJSONObject?: GetProjectWorkflowJobMetricsDefaultApplicationJSON;
}