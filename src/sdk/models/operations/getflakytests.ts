/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetFlakyTestsRequest extends SpeakeasyBase {
  /**
   * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}

/**
 * Error response.
 */
export class GetFlakyTestsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetFlakyTests200ApplicationJSONFlakyTests extends SpeakeasyBase {
  /**
   * The class the test belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "classname" })
  classname: string;

  /**
   * The file the test belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file: string;

  /**
   * The name of the job.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job-name" })
  jobName: string;

  /**
   * The number of the job.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job-number" })
  jobNumber: number;

  /**
   * The number of the pipeline.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pipeline-number" })
  pipelineNumber: number;

  /**
   * The source of the test.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: string;

  /**
   * The name of the test.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "test-name" })
  testName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "time-wasted" })
  timeWasted?: number;

  /**
   * The number of times the test flaked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "times-flaked" })
  timesFlaked: number;

  /**
   * The date and time when workflow was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workflow-created-at" })
  workflowCreatedAt: any;

  /**
   * The ID of the workflow associated with the provided test counts
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workflow-id" })
  workflowId: any;

  /**
   * The name of the workflow.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workflow-name" })
  workflowName: string;
}

/**
 * Flaky tests response
 */
export class GetFlakyTests200ApplicationJSON extends SpeakeasyBase {
  /**
   * A list of all instances of flakes. Note that a test is no longer considered flaky after 2 weeks have passed without a flake. Each flake resets this timer.
   */
  @SpeakeasyMetadata({ elemType: GetFlakyTests200ApplicationJSONFlakyTests })
  @Expose({ name: "flaky-tests" })
  @Type(() => GetFlakyTests200ApplicationJSONFlakyTests)
  flakyTests: GetFlakyTests200ApplicationJSONFlakyTests[];

  /**
   * A count of unique tests that have failed. If your project has N tests that have flaked multiple times each, this will be equal to N.
   */
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

  /**
   * A list of flaky tests for a project
   */
  @SpeakeasyMetadata()
  getFlakyTests200ApplicationJSONObject?: GetFlakyTests200ApplicationJSON;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  getFlakyTestsDefaultApplicationJSONObject?: GetFlakyTestsDefaultApplicationJSON;
}
