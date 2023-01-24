import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkflowSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow-name" })
  workflowName: string;
}


export class GetWorkflowSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all-branches" })
  allBranches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branches" })
  branches?: Record<string, any>;
}


// GetWorkflowSummary200ApplicationJsonMetricsDurationMetrics
/** 
 * Metrics relating to the duration of runs for a workflow.
**/
export class GetWorkflowSummary200ApplicationJsonMetricsDurationMetrics extends SpeakeasyBase {
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


// GetWorkflowSummary200ApplicationJsonMetrics
/** 
 * Metrics aggregated across a workflow for a given time window.
**/
export class GetWorkflowSummary200ApplicationJsonMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration_metrics" })
  durationMetrics: GetWorkflowSummary200ApplicationJsonMetricsDurationMetrics;

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

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;

  @SpeakeasyMetadata({ data: "json, name=window_end" })
  windowEnd: Date;

  @SpeakeasyMetadata({ data: "json, name=window_start" })
  windowStart: Date;
}


// GetWorkflowSummary200ApplicationJsonTrends
/** 
 * Trends for aggregated metrics across a workflow for a given time window.
**/
export class GetWorkflowSummary200ApplicationJsonTrends extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata({ data: "json, name=median_duration_secs" })
  medianDurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=mttr" })
  mttr: number;

  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=throughput" })
  throughput: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


// GetWorkflowSummary200ApplicationJson
/** 
 * Workflow level aggregated metrics and trends response
**/
export class GetWorkflowSummary200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetWorkflowSummary200ApplicationJsonMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetWorkflowSummary200ApplicationJsonTrends;

  @SpeakeasyMetadata({ data: "json, name=workflow_names" })
  workflowNames: string[];
}


export class GetWorkflowSummaryDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetWorkflowSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkflowSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkflowSummaryQueryParams;
}


export class GetWorkflowSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getWorkflowSummary200ApplicationJSONObject?: GetWorkflowSummary200ApplicationJson;

  @SpeakeasyMetadata()
  getWorkflowSummaryDefaultApplicationJSONObject?: GetWorkflowSummaryDefaultApplicationJson;
}
