import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAllInsightsBranchesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


export class GetAllInsightsBranchesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workflow-name" })
  workflowName?: string;
}


export class GetAllInsightsBranchesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAllInsightsBranchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllInsightsBranchesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAllInsightsBranchesQueryParams;
}


export class GetAllInsightsBranchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllInsightsBranches200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllInsightsBranchesDefaultApplicationJsonObject?: GetAllInsightsBranchesDefaultApplicationJson;
}
