import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetJobArtifactsArtifactListResponseArtifact
/** 
 * An artifact
**/
export class GetJobArtifactsArtifactListResponseArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "node_index" })
  nodeIndex: number;

  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}

export class GetJobArtifactsArtifactListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetJobArtifactsArtifactListResponseArtifact })
  @Expose({ name: "items" })
  @Type(() => GetJobArtifactsArtifactListResponseArtifact)
  items: GetJobArtifactsArtifactListResponseArtifact[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
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
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getJobArtifactsDefaultApplicationJSONObject?: GetJobArtifactsDefaultApplicationJSON;
}