import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=granularity" })
  granularity?: GetJobTimeseriesGranularityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  startDate?: Date;
}

export class GetJobTimeseriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobTimeseriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetJobTimeseriesQueryParams;
}

export class GetJobTimeseriesDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetJobTimeseries200ApplicationJSONItemsMetricsDurationMetrics
/** 
 * Metrics relating to the duration of runs for a workflow.
**/
export class GetJobTimeseries200ApplicationJSONItemsMetricsDurationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max: number;

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
  @Expose({ name: "total" })
  total: number;
}

// GetJobTimeseries200ApplicationJSONItemsMetrics
/** 
 * Metrics relating to a workflow's runs.
**/
export class GetJobTimeseries200ApplicationJSONItemsMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duration_metrics" })
  @Type(() => GetJobTimeseries200ApplicationJSONItemsMetricsDurationMetrics)
  durationMetrics: GetJobTimeseries200ApplicationJSONItemsMetricsDurationMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata()
  @Expose({ name: "median_credits_used" })
  medianCreditsUsed: number;

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

export class GetJobTimeseries200ApplicationJSONItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "max_ended_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  maxEndedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetJobTimeseries200ApplicationJSONItemsMetrics)
  metrics: GetJobTimeseries200ApplicationJSONItemsMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "min_started_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  minStartedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;
}

// GetJobTimeseries200ApplicationJSON
/** 
 * Project level timeseries metrics response
**/
export class GetJobTimeseries200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetJobTimeseries200ApplicationJSONItems })
  @Expose({ name: "items" })
  @Type(() => GetJobTimeseries200ApplicationJSONItems)
  items: GetJobTimeseries200ApplicationJSONItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class GetJobTimeseriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getJobTimeseries200ApplicationJSONObject?: GetJobTimeseries200ApplicationJSON;

  @SpeakeasyMetadata()
  getJobTimeseriesDefaultApplicationJSONObject?: GetJobTimeseriesDefaultApplicationJSON;
}