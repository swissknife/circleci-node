import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetFlakyTestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class GetFlakyTestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFlakyTestsPathParams;
}

export class GetFlakyTestsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetFlakyTests200ApplicationJSONFlakyTests extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "classname" })
  classname: string;

  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job-name" })
  jobName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "job-number" })
  jobNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pipeline-number" })
  pipelineNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: string;

  @SpeakeasyMetadata()
  @Expose({ name: "test-name" })
  testName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "time-wasted" })
  timeWasted?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "times-flaked" })
  timesFlaked: number;

  @SpeakeasyMetadata()
  @Expose({ name: "workflow-created-at" })
  workflowCreatedAt: any;

  @SpeakeasyMetadata()
  @Expose({ name: "workflow-id" })
  workflowId: any;

  @SpeakeasyMetadata()
  @Expose({ name: "workflow-name" })
  workflowName: string;
}

// GetFlakyTests200ApplicationJSON
/** 
 * Flaky tests response
**/
export class GetFlakyTests200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetFlakyTests200ApplicationJSONFlakyTests })
  @Expose({ name: "flaky-tests" })
  @Type(() => GetFlakyTests200ApplicationJSONFlakyTests)
  flakyTests: GetFlakyTests200ApplicationJSONFlakyTests[];

  @SpeakeasyMetadata()
  @Expose({ name: "total-flaky-tests" })
  totalFlakyTests: number;
}

export class GetFlakyTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getFlakyTests200ApplicationJSONObject?: GetFlakyTests200ApplicationJSON;

  @SpeakeasyMetadata()
  getFlakyTestsDefaultApplicationJSONObject?: GetFlakyTestsDefaultApplicationJSON;
}