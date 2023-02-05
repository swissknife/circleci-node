import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetJobArtifactsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-number" })
  jobNumber: any;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class GetJobArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobArtifactsPathParams;
}

export class GetJobArtifactsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// GetJobArtifactsArtifactListResponseArtifact
/** 
 * An artifact
**/
export class GetJobArtifactsArtifactListResponseArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=node_index" })
  nodeIndex: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export class GetJobArtifactsArtifactListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetJobArtifactsArtifactListResponseArtifact })
  items: GetJobArtifactsArtifactListResponseArtifact[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}

export class GetJobArtifactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactListResponse?: GetJobArtifactsArtifactListResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getJobArtifactsDefaultApplicationJSONObject?: GetJobArtifactsDefaultApplicationJSON;
}