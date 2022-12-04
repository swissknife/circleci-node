import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobTimeseriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow-name" })
  workflowName: string;
}

export enum GetJobTimeseriesGranularityEnum {
    Daily = "daily",
    Hourly = "hourly"
}


export class GetJobTimeseriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=granularity" })
  granularity?: GetJobTimeseriesGranularityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-date" })
  startDate?: Date;
}


// GetJobTimeseries200ApplicationJsonItemsMetricsDurationMetrics
/** 
 * Metrics relating to the duration of runs for a workflow.
**/
export class GetJobTimeseries200ApplicationJsonItemsMetricsDurationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=median" })
  median: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min: number;

  @SpeakeasyMetadata({ data: "json, name=p95" })
  p95: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


// GetJobTimeseries200ApplicationJsonItemsMetrics
/** 
 * Metrics relating to a workflow's runs.
**/
export class GetJobTimeseries200ApplicationJsonItemsMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration_metrics" })
  durationMetrics: GetJobTimeseries200ApplicationJsonItemsMetricsDurationMetrics;

  @SpeakeasyMetadata({ data: "json, name=failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata({ data: "json, name=median_credits_used" })
  medianCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=successful_runs" })
  successfulRuns: number;

  @SpeakeasyMetadata({ data: "json, name=throughput" })
  throughput: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


export class GetJobTimeseries200ApplicationJsonItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max_ended_at" })
  maxEndedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetJobTimeseries200ApplicationJsonItemsMetrics;

  @SpeakeasyMetadata({ data: "json, name=min_started_at" })
  minStartedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}


// GetJobTimeseries200ApplicationJson
/** 
 * Project level timeseries metrics response
**/
export class GetJobTimeseries200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetJobTimeseries200ApplicationJsonItems })
  items: GetJobTimeseries200ApplicationJsonItems[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class GetJobTimeseriesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetJobTimeseriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobTimeseriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetJobTimeseriesQueryParams;
}


export class GetJobTimeseriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getJobTimeseries200ApplicationJsonObject?: GetJobTimeseries200ApplicationJson;

  @SpeakeasyMetadata()
  getJobTimeseriesDefaultApplicationJsonObject?: GetJobTimeseriesDefaultApplicationJson;
}
