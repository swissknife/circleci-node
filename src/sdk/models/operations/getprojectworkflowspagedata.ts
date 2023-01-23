import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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


// GetProjectWorkflowsPageData200ApplicationJsonProjectDataMetrics
/** 
 * Metrics aggregated across all workflows and branches for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJsonProjectDataMetrics extends SpeakeasyBase {
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


// GetProjectWorkflowsPageData200ApplicationJsonProjectDataTrends
/** 
 * Metric trends aggregated across all workflows and branches for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJsonProjectDataTrends extends SpeakeasyBase {
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


// GetProjectWorkflowsPageData200ApplicationJsonProjectData
/** 
 * Metrics and trends data aggregated for a given project.
**/
export class GetProjectWorkflowsPageData200ApplicationJsonProjectData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetProjectWorkflowsPageData200ApplicationJsonProjectDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetProjectWorkflowsPageData200ApplicationJsonProjectDataTrends;
}


// GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchDataMetrics
/** 
 * Metrics aggregated across a workflow or branchfor a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


// GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchDataTrends
/** 
 * Trends aggregated across a workflow or branch for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


export class GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchDataTrends;

  @SpeakeasyMetadata({ data: "json, name=workflow_name" })
  workflowName: string;
}


// GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowDataMetrics
/** 
 * Metrics aggregated across a workflow or branchfor a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


// GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowDataTrends
/** 
 * Trends aggregated across a workflow or branch for a project.
**/
export class GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowDataTrends extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p95_duration_secs" })
  p95DurationSecs: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=total_credits_used" })
  totalCreditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


export class GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowDataMetrics;

  @SpeakeasyMetadata({ data: "json, name=trends" })
  trends: GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowDataTrends;

  @SpeakeasyMetadata({ data: "json, name=workflow_name" })
  workflowName: string;
}


export class GetProjectWorkflowsPageData200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all_branches" })
  allBranches?: string[];

  @SpeakeasyMetadata({ data: "json, name=all_workflows" })
  allWorkflows?: string[];

  @SpeakeasyMetadata({ data: "json, name=org_id" })
  orgId?: any;

  @SpeakeasyMetadata({ data: "json, name=project_data" })
  projectData?: GetProjectWorkflowsPageData200ApplicationJsonProjectData;

  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: any;

  @SpeakeasyMetadata({ data: "json, name=project_workflow_branch_data", elemType: GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchData })
  projectWorkflowBranchData?: GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowBranchData[];

  @SpeakeasyMetadata({ data: "json, name=project_workflow_data", elemType: GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowData })
  projectWorkflowData?: GetProjectWorkflowsPageData200ApplicationJsonProjectWorkflowData[];
}


export class GetProjectWorkflowsPageDataDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetProjectWorkflowsPageDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowsPageDataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowsPageDataQueryParams;
}


export class GetProjectWorkflowsPageDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectWorkflowsPageData200ApplicationJSONObject?: GetProjectWorkflowsPageData200ApplicationJson;

  @SpeakeasyMetadata()
  getProjectWorkflowsPageDataDefaultApplicationJSONObject?: GetProjectWorkflowsPageDataDefaultApplicationJson;
}
