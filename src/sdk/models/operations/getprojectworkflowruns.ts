import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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

export enum GetProjectWorkflowRuns200ApplicationJsonItemsStatusEnum {
    Success = "success",
    Failed = "failed",
    Error = "error",
    Canceled = "canceled",
    Unauthorized = "unauthorized"
}


export class GetProjectWorkflowRuns200ApplicationJsonItems extends SpeakeasyBase {
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
  status: GetProjectWorkflowRuns200ApplicationJsonItemsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped_at" })
  stoppedAt: Date;
}


// GetProjectWorkflowRuns200ApplicationJson
/** 
 * Paginated recent workflow runs.
**/
export class GetProjectWorkflowRuns200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetProjectWorkflowRuns200ApplicationJsonItems })
  items: GetProjectWorkflowRuns200ApplicationJsonItems[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class GetProjectWorkflowRunsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetProjectWorkflowRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowRunsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowRunsQueryParams;
}


export class GetProjectWorkflowRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectWorkflowRuns200ApplicationJsonObject?: GetProjectWorkflowRuns200ApplicationJson;

  @SpeakeasyMetadata()
  getProjectWorkflowRunsDefaultApplicationJsonObject?: GetProjectWorkflowRunsDefaultApplicationJson;
}
