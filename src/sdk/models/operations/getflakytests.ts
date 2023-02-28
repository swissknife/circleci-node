import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
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
  jobNumber: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "pipeline-number" })
  pipelineNumber: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: string;

  @SpeakeasyMetadata()
  @Expose({ name: "test-name" })
  testName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "time-wasted" })
  timeWasted?: Record<string, any>;

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
  getFlakyTests200ApplicationJSONObject?: GetFlakyTests200ApplicationJSON;

  @SpeakeasyMetadata()
  getFlakyTestsDefaultApplicationJSONObject?: GetFlakyTestsDefaultApplicationJSON;
}