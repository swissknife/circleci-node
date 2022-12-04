import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectWorkflowTestMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow-name" })
  workflowName: string;
}


export class GetProjectWorkflowTestMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all-branches" })
  allBranches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;
}


export class GetProjectWorkflowTestMetrics200ApplicationJsonMostFailedTests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classname" })
  classname: string;

  @SpeakeasyMetadata({ data: "json, name=failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: string;

  @SpeakeasyMetadata({ data: "json, name=flaky" })
  flaky: boolean;

  @SpeakeasyMetadata({ data: "json, name=job_name" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=p95_duration" })
  p95Duration: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=test_name" })
  testName: string;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


export class GetProjectWorkflowTestMetrics200ApplicationJsonSlowestTests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classname" })
  classname: string;

  @SpeakeasyMetadata({ data: "json, name=failed_runs" })
  failedRuns: number;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: string;

  @SpeakeasyMetadata({ data: "json, name=flaky" })
  flaky: boolean;

  @SpeakeasyMetadata({ data: "json, name=job_name" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=p95_duration" })
  p95Duration: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=test_name" })
  testName: string;

  @SpeakeasyMetadata({ data: "json, name=total_runs" })
  totalRuns: number;
}


// GetProjectWorkflowTestMetrics200ApplicationJsonTestRunsTestCounts
/** 
 * Test counts for a given pipeline number
**/
export class GetProjectWorkflowTestMetrics200ApplicationJsonTestRunsTestCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: number;

  @SpeakeasyMetadata({ data: "json, name=failure" })
  failure: number;

  @SpeakeasyMetadata({ data: "json, name=skipped" })
  skipped: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class GetProjectWorkflowTestMetrics200ApplicationJsonTestRuns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipeline_number" })
  pipelineNumber: number;

  @SpeakeasyMetadata({ data: "json, name=success_rate" })
  successRate: number;

  @SpeakeasyMetadata({ data: "json, name=test_counts" })
  testCounts: GetProjectWorkflowTestMetrics200ApplicationJsonTestRunsTestCounts;

  @SpeakeasyMetadata({ data: "json, name=workflow_id" })
  workflowId: any;
}


// GetProjectWorkflowTestMetrics200ApplicationJson
/** 
 * Project level test metrics response
**/
export class GetProjectWorkflowTestMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average_test_count" })
  averageTestCount: number;

  @SpeakeasyMetadata({ data: "json, name=most_failed_tests", elemType: GetProjectWorkflowTestMetrics200ApplicationJsonMostFailedTests })
  mostFailedTests: GetProjectWorkflowTestMetrics200ApplicationJsonMostFailedTests[];

  @SpeakeasyMetadata({ data: "json, name=most_failed_tests_extra" })
  mostFailedTestsExtra: number;

  @SpeakeasyMetadata({ data: "json, name=slowest_tests", elemType: GetProjectWorkflowTestMetrics200ApplicationJsonSlowestTests })
  slowestTests: GetProjectWorkflowTestMetrics200ApplicationJsonSlowestTests[];

  @SpeakeasyMetadata({ data: "json, name=slowest_tests_extra" })
  slowestTestsExtra: number;

  @SpeakeasyMetadata({ data: "json, name=test_runs", elemType: GetProjectWorkflowTestMetrics200ApplicationJsonTestRuns })
  testRuns: GetProjectWorkflowTestMetrics200ApplicationJsonTestRuns[];

  @SpeakeasyMetadata({ data: "json, name=total_test_runs" })
  totalTestRuns: number;
}


export class GetProjectWorkflowTestMetricsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetProjectWorkflowTestMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectWorkflowTestMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectWorkflowTestMetricsQueryParams;
}


export class GetProjectWorkflowTestMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectWorkflowTestMetrics200ApplicationJsonObject?: GetProjectWorkflowTestMetrics200ApplicationJson;

  @SpeakeasyMetadata()
  getProjectWorkflowTestMetricsDefaultApplicationJsonObject?: GetProjectWorkflowTestMetricsDefaultApplicationJson;
}
