import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFlakyTestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


export class GetFlakyTests200ApplicationJsonFlakyTests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classname" })
  classname: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: string;

  @SpeakeasyMetadata({ data: "json, name=job-name" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=job-number" })
  jobNumber: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pipeline-number" })
  pipelineNumber: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=test-name" })
  testName: string;

  @SpeakeasyMetadata({ data: "json, name=time-wasted" })
  timeWasted?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=times-flaked" })
  timesFlaked: number;

  @SpeakeasyMetadata({ data: "json, name=workflow-created-at" })
  workflowCreatedAt: any;

  @SpeakeasyMetadata({ data: "json, name=workflow-id" })
  workflowId: any;

  @SpeakeasyMetadata({ data: "json, name=workflow-name" })
  workflowName: string;
}


// GetFlakyTests200ApplicationJson
/** 
 * Flaky tests response
**/
export class GetFlakyTests200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flaky-tests", elemType: GetFlakyTests200ApplicationJsonFlakyTests })
  flakyTests: GetFlakyTests200ApplicationJsonFlakyTests[];

  @SpeakeasyMetadata({ data: "json, name=total-flaky-tests" })
  totalFlakyTests: number;
}


export class GetFlakyTestsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetFlakyTestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFlakyTestsPathParams;
}


export class GetFlakyTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFlakyTests200ApplicationJsonObject?: GetFlakyTests200ApplicationJson;

  @SpeakeasyMetadata()
  getFlakyTestsDefaultApplicationJsonObject?: GetFlakyTestsDefaultApplicationJson;
}
