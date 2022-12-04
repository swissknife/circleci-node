import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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
  projectNames?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
  reportingWindow?: GetOrgSummaryDataReportingWindowEnum;
}


// GetOrgSummaryData200ApplicationJsonOrgDataMetrics
/** 
 * Metrics for a single org metrics.
**/
export class GetOrgSummaryData200ApplicationJsonOrgDataMetrics extends SpeakeasyBase {
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


// GetOrgSummaryData200ApplicationJsonOrgDataTrends
/** 
 * Trends for a single org.
**/
export class GetOrgSummaryData200ApplicationJsonOrgDataTrends extends SpeakeasyBase {
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


// GetOrgSummaryData200ApplicationJsonOrgData
/** 
 * Aggregated metrics for an org, with trends.
**/
export class GetOrgSummaryData200ApplicationJsonOrgData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetOrgSummaryData200ApplicationJsonOrgDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetOrgSummaryData200ApplicationJsonOrgDataTrends;
}


// GetOrgSummaryData200ApplicationJsonOrgProjectDataMetrics
/** 
 * Metrics for a single project, across all branches.
**/
export class GetOrgSummaryData200ApplicationJsonOrgProjectDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


// GetOrgSummaryData200ApplicationJsonOrgProjectDataTrends
/** 
 * Trends for a single project, across all branches.
**/
export class GetOrgSummaryData200ApplicationJsonOrgProjectDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_duration_secs" })
  totalDurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


export class GetOrgSummaryData200ApplicationJsonOrgProjectData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetOrgSummaryData200ApplicationJsonOrgProjectDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetOrgSummaryData200ApplicationJsonOrgProjectDataTrends;
}


// GetOrgSummaryData200ApplicationJson
/** 
 * Summary metrics with trends for the entire org, and for each project.
**/
export class GetOrgSummaryData200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all_projects" })
  allProjects: string[];

  @SpeakeasyMetadata({ data: "json, name=org_data" })
  orgData: GetOrgSummaryData200ApplicationJsonOrgData;

  @SpeakeasyMetadata({ data: "json, name=org_project_data", elemType: GetOrgSummaryData200ApplicationJsonOrgProjectData })
  orgProjectData: GetOrgSummaryData200ApplicationJsonOrgProjectData[];
}


export class GetOrgSummaryDataDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetOrgSummaryDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrgSummaryDataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrgSummaryDataQueryParams;
}


export class GetOrgSummaryDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrgSummaryData200ApplicationJsonObject?: GetOrgSummaryData200ApplicationJson;

  @SpeakeasyMetadata()
  getOrgSummaryDataDefaultApplicationJsonObject?: GetOrgSummaryDataDefaultApplicationJson;
}
