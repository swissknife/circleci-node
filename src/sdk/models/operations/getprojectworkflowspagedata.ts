import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetProjectWorkflowsPageDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}
export enum GetProjectWorkflowsPageDataReportingWindowEnum {
    Last7Days = "last-7-days",
    Last90Days = "last-90-days",
    Last24Hours = "last-24-hours",
    Last30Days = "last-30-days",
    Last60Days = "last-60-days"
}

export class GetProjectWorkflowsPageDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branches" })
  branches?: Record<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reporting-window" })
  reportingWindow?: GetProjectWorkflowsPageDataReportingWindowEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workflow-names" })
  workflowNames?: Record<string, any>;
}

export class GetProjectWorkflowsPageDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowsPageDataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowsPageDataQueryParams;
}

export class GetProjectWorkflowsPageDataDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics
/** 
 * Metrics aggregated across all workflows and branches for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics extends SpeakeasyBase {
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

// GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends
/** 
 * Metric trends aggregated across all workflows and branches for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends extends SpeakeasyBase {
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

// GetProjectWorkflowsPageData200ApplicationJSONProjectData
/** 
 * Metrics and trends data aggregated for a given project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics)
  metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends)
  trends: GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics
/** 
 * Metrics aggregated across a workflow or branchfor a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends
/** 
 * Trends aggregated across a workflow or branch for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics)
  metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends)
  trends: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends;

  @SpeakeasyMetadata()
  @Expose({ name: "workflow_name" })
  workflowName: string;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics
/** 
 * Metrics aggregated across a workflow or branchfor a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends
/** 
 * Trends aggregated across a workflow or branch for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics)
  metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics;

  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends)
  trends: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends;

  @SpeakeasyMetadata()
  @Expose({ name: "workflow_name" })
  workflowName: string;
}

export class GetProjectWorkflowsPageData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "all_branches" })
  allBranches?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "all_workflows" })
  allWorkflows?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "org_id" })
  orgId?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "project_data" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectData)
  projectData?: GetProjectWorkflowsPageData200ApplicationJSONProjectData;

  @SpeakeasyMetadata()
  @Expose({ name: "project_id" })
  projectId?: any;

  @SpeakeasyMetadata({ elemType: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData })
  @Expose({ name: "project_workflow_branch_data" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData)
  projectWorkflowBranchData?: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData[];

  @SpeakeasyMetadata({ elemType: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData })
  @Expose({ name: "project_workflow_data" })
  @Type(() => GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData)
  projectWorkflowData?: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData[];
}

export class GetProjectWorkflowsPageDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getProjectWorkflowsPageData200ApplicationJSONObject?: GetProjectWorkflowsPageData200ApplicationJSON;

  @SpeakeasyMetadata()
  getProjectWorkflowsPageDataDefaultApplicationJSONObject?: GetProjectWorkflowsPageDataDefaultApplicationJSON;
}