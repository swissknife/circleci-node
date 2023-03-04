import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetAllInsightsBranchesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class GetAllInsightsBranchesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workflow-name" })
  workflowName?: string;
}

export class GetAllInsightsBranchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllInsightsBranchesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAllInsightsBranchesQueryParams;
}

export class GetAllInsightsBranchesDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetAllInsightsBranchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getAllInsightsBranches200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllInsightsBranchesDefaultApplicationJSONObject?: GetAllInsightsBranchesDefaultApplicationJSON;
}