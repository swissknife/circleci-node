# GetProjectWorkflowTestMetricsResponseBody

Project level test metrics response

## Example Usage

```typescript
import { GetProjectWorkflowTestMetricsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowTestMetricsResponseBody = {
  averageTestCount: 873833,
  mostFailedTests: [
    {
      classname: "<value>",
      failedRuns: 833982,
      file: "<value>",
      flaky: false,
      jobName: "<value>",
      p95Duration: 2138.35,
      source: "<value>",
      testName: "<value>",
      totalRuns: 771226,
    },
  ],
  mostFailedTestsExtra: 12171,
  slowestTests: [
    {
      classname: "<value>",
      failedRuns: 322829,
      file: "<value>",
      flaky: false,
      jobName: "<value>",
      p95Duration: 2295.67,
      source: "<value>",
      testName: "<value>",
      totalRuns: 506863,
    },
  ],
  slowestTestsExtra: 736853,
  testRuns: [
    {
      pipelineNumber: 97676,
      successRate: 5149.22,
      testCounts: {
        error: 938412,
        failure: 228646,
        skipped: 677141,
        success: 592880,
        total: 10063,
      },
      workflowId: "<value>",
    },
  ],
  totalTestRuns: 475826,
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