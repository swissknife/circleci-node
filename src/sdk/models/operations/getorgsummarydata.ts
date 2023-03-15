import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetOrgSummaryDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=org-slug",
  })
  orgSlug: string;
}
export enum GetOrgSummaryDataReportingWindowEnum {
  Last7Days = "last-7-days",
  Last90Days = "last-90-days",
  Last24Hours = "last-24-hours",
  Last30Days = "last-30-days",
  Last60Days = "last-60-days",
}

export class GetOrgSummaryDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=project-names",
  })
  projectNames?: Record<string, any>;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reporting-window",
  })
  reportingWindow?: GetOrgSummaryDataReportingWindowEnum;
}

export class GetOrgSummaryDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrgSummaryDataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrgSummaryDataQueryParams;
}

export class GetOrgSummaryDataDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetOrgSummaryData200ApplicationJSONOrgDataMetrics
/**
 * Metrics for a single org metrics.
 **/
export class GetOrgSummaryData200ApplicationJSONOrgDataMetrics extends SpeakeasyBase {
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
  @Expose({ name: "total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

// GetOrgSummaryData200ApplicationJSONOrgDataTrends
/**
 * Trends for a single org.
 **/
export class GetOrgSummaryData200ApplicationJSONOrgDataTrends extends SpeakeasyBase {
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
  @Expose({ name: "total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

// GetOrgSummaryData200ApplicationJSONOrgData
/**
 * Aggregated metrics for an org, with trends.
 **/
export class GetOrgSummaryData200ApplicationJSONOrgData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgDataMetrics)
  metrics: GetOrgSummaryData200ApplicationJSONOrgDataMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgDataTrends)
  trends: GetOrgSummaryData200ApplicationJSONOrgDataTrends;
}

// GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics
/**
 * Metrics for a single project, across all branches.
 **/
export class GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

// GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends
/**
 * Trends for a single project, across all branches.
 **/
export class GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

export class GetOrgSummaryData200ApplicationJSONOrgProjectData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics)
  metrics: GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "project_name" })
  projectName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends)
  trends: GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends;
}

// GetOrgSummaryData200ApplicationJSON
/**
 * Summary metrics with trends for the entire org, and for each project.
 **/
export class GetOrgSummaryData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "all_projects" })
  allProjects: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "org_data" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgData)
  orgData: GetOrgSummaryData200ApplicationJSONOrgData;

  @SpeakeasyMetadata({
    elemType: GetOrgSummaryData200ApplicationJSONOrgProjectData,
  })
  @Expose({ name: "org_project_data" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgProjectData)
  orgProjectData: GetOrgSummaryData200ApplicationJSONOrgProjectData[];
}

export class GetOrgSummaryDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getOrgSummaryData200ApplicationJSONObject?: GetOrgSummaryData200ApplicationJSON;

  @SpeakeasyMetadata()
  getOrgSummaryDataDefaultApplicationJSONObject?: GetOrgSummaryDataDefaultApplicationJSON;
}
