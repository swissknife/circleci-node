# GetProjectWorkflowTestMetricsResponseBody

Project level test metrics response

## Example Usage

```typescript
import { GetProjectWorkflowTestMetricsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowTestMetricsResponseBody = {
  averageTestCount: 233420,
  mostFailedTests: [
    {
      classname: "<value>",
      failedRuns: 358107,
      file: "<value>",
      flaky: false,
      jobName: "<value>",
      p95Duration: 6897.68,
      source: "<value>",
      testName: "<value>",
      totalRuns: 385237,
    },
  ],
  mostFailedTestsExtra: 58356,
  slowestTests: [
    {
      classname: "<value>",
      failedRuns: 916727,
      file: "<value>",
      flaky: false,
      jobName: "<value>",
      p95Duration: 7307.09,
      source: "<value>",
      testName: "<value>",
      totalRuns: 113816,
    },
  ],
  slowestTestsExtra: 881721,
  testRuns: [
    {
      pipelineNumber: 631126,
      successRate: 2724.37,
      testCounts: {
        error: 132815,
        failure: 379057,
        skipped: 374244,
        success: 374296,
        total: 324405,
      },
      workflowId: "<value>",
    },
  ],
  totalTestRuns: 748789,
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