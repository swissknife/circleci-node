# GetProjectWorkflowTestMetricsResponseBody

Project level test metrics response

## Example Usage

```typescript
import { GetProjectWorkflowTestMetricsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowTestMetricsResponseBody = {
  averageTestCount: 120120,
  mostFailedTests: [
    {
      classname: "<value>",
      failedRuns: 334474,
      file: "<value>",
      flaky: false,
      jobName: "<value>",
      p95Duration: 1753.72,
      source: "<value>",
      testName: "<value>",
      totalRuns: 115898,
    },
  ],
  mostFailedTestsExtra: 899867,
  slowestTests: [
    {
      classname: "<value>",
      failedRuns: 56877,
      file: "<value>",
      flaky: false,
      jobName: "<value>",
      p95Duration: 9804.86,
      source: "<value>",
      testName: "<value>",
      totalRuns: 96450,
    },
  ],
  slowestTestsExtra: 863471,
  testRuns: [
    {
      pipelineNumber: 566506,
      successRate: 3679.17,
      testCounts: {
        error: 342342,
        failure: 757364,
        skipped: 314573,
        success: 657319,
        total: 517326,
      },
      workflowId: "<value>",
    },
  ],
  totalTestRuns: 484966,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `averageTestCount`                                                                  | *number*                                                                            | :heavy_check_mark:                                                                  | The average number of tests executed per run                                        |
| `mostFailedTests`                                                                   | [operations.MostFailedTests](../../../sdk/models/operations/mostfailedtests.md)[]   | :heavy_check_mark:                                                                  | Metrics for the most frequently failing tests                                       |
| `mostFailedTestsExtra`                                                              | *number*                                                                            | :heavy_check_mark:                                                                  | The number of tests with the same success rate being omitted from most_failed_tests |
| `slowestTests`                                                                      | [operations.SlowestTests](../../../sdk/models/operations/slowesttests.md)[]         | :heavy_check_mark:                                                                  | Metrics for the slowest running tests                                               |
| `slowestTestsExtra`                                                                 | *number*                                                                            | :heavy_check_mark:                                                                  | The number of tests with the same duration rate being omitted from slowest_tests    |
| `testRuns`                                                                          | [operations.TestRuns](../../../sdk/models/operations/testruns.md)[]                 | :heavy_check_mark:                                                                  | Test counts grouped by pipeline number and workflow id                              |
| `totalTestRuns`                                                                     | *number*                                                                            | :heavy_check_mark:                                                                  | The total number of test runs                                                       |