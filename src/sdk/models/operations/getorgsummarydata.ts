import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetOrgSummaryDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org-slug" })
  orgSlug: string;
}
export enum GetOrgSummaryDataReportingWindowEnum {
    Last7Days = "last-7-days",
    Last90Days = "last-90-days",
    Last24Hours = "last-24-hours",
    Last30Days = "last-30-days",
    Last60Days = "last-60-days"
}

export class GetOrgSummaryDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project-names" })
  projectNames?: Record<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
  reportingWindow?: GetOrgSummaryDataReportingWindowEnum;
}

export class GetOrgSummaryDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrgSummaryDataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrgSummaryDataQueryParams;
}

export class GetOrgSummaryDataDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// GetOrgSummaryData200ApplicationJSONOrgDataMetrics
/** 
 * Metrics for a single org metrics.
**/
export class GetOrgSummaryData200ApplicationJSONOrgDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=throughput" })
  throughput: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

// GetOrgSummaryData200ApplicationJSONOrgDataTrends
/** 
 * Trends for a single org.
**/
export class GetOrgSummaryData200ApplicationJSONOrgDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=throughput" })
  throughput: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

// GetOrgSummaryData200ApplicationJSONOrgData
/** 
 * Aggregated metrics for an org, with trends.
**/
export class GetOrgSummaryData200ApplicationJSONOrgData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetOrgSummaryData200ApplicationJSONOrgDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetOrgSummaryData200ApplicationJSONOrgDataTrends;
}

// GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics
/** 
 * Metrics for a single project, across all branches.
**/
export class GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

// GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends
/** 
 * Trends for a single project, across all branches.
**/
export class GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

export class GetOrgSummaryData200ApplicationJSONOrgProjectData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends;
}

// GetOrgSummaryData200ApplicationJSON
/** 
 * Summary metrics with trends for the entire org, and for each project.
**/
export class GetOrgSummaryData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all_projects" })
  allProjects: string[];

  @SpeakeasyMetadata({ data: "json, name=org_data" })
  orgData: GetOrgSummaryData200ApplicationJSONOrgData;

  @SpeakeasyMetadata({ data: "json, name=org_project_data", elemType: GetOrgSummaryData200ApplicationJSONOrgProjectData })
  orgProjectData: GetOrgSummaryData200ApplicationJSONOrgProjectData[];
}

export class GetOrgSummaryDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrgSummaryData200ApplicationJSONObject?: GetOrgSummaryData200ApplicationJSON;

  @SpeakeasyMetadata()
  getOrgSummaryDataDefaultApplicationJSONObject?: GetOrgSummaryDataDefaultApplicationJSON;
}