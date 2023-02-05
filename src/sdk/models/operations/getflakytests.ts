import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetFlakyTestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class GetFlakyTestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFlakyTestsPathParams;
}

export class GetFlakyTestsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export class GetFlakyTests200ApplicationJSONFlakyTests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classname" })
  classname: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: string;

  @SpeakeasyMetadata({ data: "json, name=job-name" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=job-number" })
  jobNumber: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pipeline-number" })
  pipelineNumber: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=test-name" })
  testName: string;

  @SpeakeasyMetadata({ data: "json, name=time-wasted" })
  timeWasted?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=times-flaked" })
  timesFlaked: number;

  @SpeakeasyMetadata({ data: "json, name=workflow-created-at" })
  workflowCreatedAt: any;

  @SpeakeasyMetadata({ data: "json, name=workflow-id" })
  workflowId: any;

  @SpeakeasyMetadata({ data: "json, name=workflow-name" })
  workflowName: string;
}

// GetFlakyTests200ApplicationJSON
/** 
 * Flaky tests response
**/
export class GetFlakyTests200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flaky-tests", elemType: GetFlakyTests200ApplicationJSONFlakyTests })
  flakyTests: GetFlakyTests200ApplicationJSONFlakyTests[];

  @SpeakeasyMetadata({ data: "json, name=total-flaky-tests" })
  totalFlakyTests: number;
}

export class GetFlakyTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFlakyTests200ApplicationJSONObject?: GetFlakyTests200ApplicationJSON;

  @SpeakeasyMetadata()
  getFlakyTestsDefaultApplicationJSONObject?: GetFlakyTestsDefaultApplicationJSON;
}