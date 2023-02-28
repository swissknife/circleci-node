import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  startDate?: Date;
}

export class GetProjectWorkflowRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowRunsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowRunsQueryParams;
}

export class GetProjectWorkflowRunsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "credits_used" })
  creditsUsed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetProjectWorkflowRuns200ApplicationJSONItemsStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "stopped_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  stoppedAt: Date;
}

// GetProjectWorkflowRuns200ApplicationJSON
/** 
 * Paginated recent workflow runs.
**/
export class GetProjectWorkflowRuns200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetProjectWorkflowRuns200ApplicationJSONItems })
  @Expose({ name: "items" })
  @Type(() => GetProjectWorkflowRuns200ApplicationJSONItems)
  items: GetProjectWorkflowRuns200ApplicationJSONItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
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