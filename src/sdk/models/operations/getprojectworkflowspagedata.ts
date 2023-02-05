import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics
/** 
 * Metrics aggregated across all workflows and branches for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics extends SpeakeasyBase {
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

// GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends
/** 
 * Metric trends aggregated across all workflows and branches for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends extends SpeakeasyBase {
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

// GetProjectWorkflowsPageData200ApplicationJSONProjectData
/** 
 * Metrics and trends data aggregated for a given project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetProjectWorkflowsPageData200ApplicationJSONProjectDataTrends;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics
/** 
 * Metrics aggregated across a workflow or branchfor a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends
/** 
 * Trends aggregated across a workflow or branch for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends;

  @SpeakeasyMetadata({ data: "json, name=workflow_name" })
  workflowName: string;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics
/** 
 * Metrics aggregated across a workflow or branchfor a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

// GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends
/** 
 * Trends aggregated across a workflow or branch for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}

export class GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowDataTrends;

  @SpeakeasyMetadata({ data: "json, name=workflow_name" })
  workflowName: string;
}

export class GetProjectWorkflowsPageData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all_branches" })
  allBranches?: string[];

  @SpeakeasyMetadata({ data: "json, name=all_workflows" })
  allWorkflows?: string[];

  @SpeakeasyMetadata({ data: "json, name=org_id" })
  orgId?: any;

  @SpeakeasyMetadata({ data: "json, name=project_data" })
  projectData?: GetProjectWorkflowsPageData200ApplicationJSONProjectData;

  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: any;

  @SpeakeasyMetadata({ data: "json, name=project_workflow_branch_data", elemType: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData })
  projectWorkflowBranchData?: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData[];

  @SpeakeasyMetadata({ data: "json, name=project_workflow_data", elemType: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData })
  projectWorkflowData?: GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData[];
}

export class GetProjectWorkflowsPageDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectWorkflowsPageData200ApplicationJSONObject?: GetProjectWorkflowsPageData200ApplicationJSON;

  @SpeakeasyMetadata()
  getProjectWorkflowsPageDataDefaultApplicationJSONObject?: GetProjectWorkflowsPageDataDefaultApplicationJSON;
}