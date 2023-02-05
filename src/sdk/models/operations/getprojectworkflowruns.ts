import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetProjectWorkflowRunsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow-name" })
  workflowName: string;
}

export class GetProjectWorkflowRunsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all-branches" })
  allBranches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-date" })
  startDate?: Date;
}

export class GetProjectWorkflowRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowRunsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowRunsQueryParams;
}

export class GetProjectWorkflowRunsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
export enum GetProjectWorkflowRuns200ApplicationJSONItemsStatusEnum {
    Success = "success",
    Failed = "failed",
    Error = "error",
    Canceled = "canceled",
    Unauthorized = "unauthorized"
}

export class GetProjectWorkflowRuns200ApplicationJSONItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=credits_used" })
  creditsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetProjectWorkflowRuns200ApplicationJSONItemsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped_at" })
  stoppedAt: Date;
}

// GetProjectWorkflowRuns200ApplicationJSON
/** 
 * Paginated recent workflow runs.
**/
export class GetProjectWorkflowRuns200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetProjectWorkflowRuns200ApplicationJSONItems })
  items: GetProjectWorkflowRuns200ApplicationJSONItems[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}

export class GetProjectWorkflowRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectWorkflowRuns200ApplicationJSONObject?: GetProjectWorkflowRuns200ApplicationJSON;

  @SpeakeasyMetadata()
  getProjectWorkflowRunsDefaultApplicationJSONObject?: GetProjectWorkflowRunsDefaultApplicationJSON;
}