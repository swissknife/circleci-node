import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetProjectWorkflowTestMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workflow-name",
  })
  workflowName: string;
}

export class GetProjectWorkflowTestMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=all-branches",
  })
  allBranches?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=branch",
  })
  branch?: string;
}

export class GetProjectWorkflowTestMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowTestMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowTestMetricsQueryParams;
}

export class GetProjectWorkflowTestMetricsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetProjectWorkflowTestMetrics200ApplicationJSONMostFailedTests extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "classname" })
  classname: string;

  @SpeakeasyMetadata()
  @Expose({ name: "failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file: string;

  @SpeakeasyMetadata()
  @Expose({ name: "flaky" })
  flaky: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "job_name" })
  jobName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "p95_duration" })
  p95Duration: number;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: string;

  @SpeakeasyMetadata()
  @Expose({ name: "test_name" })
  testName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

export class GetProjectWorkflowTestMetrics200ApplicationJSONSlowestTests extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "classname" })
  classname: string;

  @SpeakeasyMetadata()
  @Expose({ name: "failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file: string;

  @SpeakeasyMetadata()
  @Expose({ name: "flaky" })
  flaky: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "job_name" })
  jobName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "p95_duration" })
  p95Duration: number;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: string;

  @SpeakeasyMetadata()
  @Expose({ name: "test_name" })
  testName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

// GetProjectWorkflowTestMetrics200ApplicationJSONTestRunsTestCounts
/**
 * Test counts for a given pipeline number
 **/
export class GetProjectWorkflowTestMetrics200ApplicationJSONTestRunsTestCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error: number;

  @SpeakeasyMetadata()
  @Expose({ name: "failure" })
  failure: number;

  @SpeakeasyMetadata()
  @Expose({ name: "skipped" })
  skipped: number;

  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;
}

export class GetProjectWorkflowTestMetrics200ApplicationJSONTestRuns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pipeline_number" })
  pipelineNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  @SpeakeasyMetadata()
  @Expose({ name: "test_counts" })
  @Type(() => GetProjectWorkflowTestMetrics200ApplicationJSONTestRunsTestCounts)
  testCounts: GetProjectWorkflowTestMetrics200ApplicationJSONTestRunsTestCounts;

  @SpeakeasyMetadata()
  @Expose({ name: "workflow_id" })
  workflowId: any;
}

// GetProjectWorkflowTestMetrics200ApplicationJSON
/**
 * Project level test metrics response
 **/
export class GetProjectWorkflowTestMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "average_test_count" })
  averageTestCount: number;

  @SpeakeasyMetadata({
    elemType: GetProjectWorkflowTestMetrics200ApplicationJSONMostFailedTests,
  })
  @Expose({ name: "most_failed_tests" })
  @Type(() => GetProjectWorkflowTestMetrics200ApplicationJSONMostFailedTests)
  mostFailedTests: GetProjectWorkflowTestMetrics200ApplicationJSONMostFailedTests[];

  @SpeakeasyMetadata()
  @Expose({ name: "most_failed_tests_extra" })
  mostFailedTestsExtra: number;

  @SpeakeasyMetadata({
    elemType: GetProjectWorkflowTestMetrics200ApplicationJSONSlowestTests,
  })
  @Expose({ name: "slowest_tests" })
  @Type(() => GetProjectWorkflowTestMetrics200ApplicationJSONSlowestTests)
  slowestTests: GetProjectWorkflowTestMetrics200ApplicationJSONSlowestTests[];

  @SpeakeasyMetadata()
  @Expose({ name: "slowest_tests_extra" })
  slowestTestsExtra: number;

  @SpeakeasyMetadata({
    elemType: GetProjectWorkflowTestMetrics200ApplicationJSONTestRuns,
  })
  @Expose({ name: "test_runs" })
  @Type(() => GetProjectWorkflowTestMetrics200ApplicationJSONTestRuns)
  testRuns: GetProjectWorkflowTestMetrics200ApplicationJSONTestRuns[];

  @SpeakeasyMetadata()
  @Expose({ name: "total_test_runs" })
  totalTestRuns: number;
}

export class GetProjectWorkflowTestMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getProjectWorkflowTestMetrics200ApplicationJSONObject?: GetProjectWorkflowTestMetrics200ApplicationJSON;

  @SpeakeasyMetadata()
  getProjectWorkflowTestMetricsDefaultApplicationJSONObject?: GetProjectWorkflowTestMetricsDefaultApplicationJSON;
}
