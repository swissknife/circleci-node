# GetProjectWorkflowTestMetricsResponseBody

Project level test metrics response

## Example Usage

```typescript
import { GetProjectWorkflowTestMetricsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowTestMetricsResponseBody = {
    averageTestCount: 750765,
    mostFailedTests: [
        {
            classname: "<value>",
            failedRuns: 24619,
            file: "<value>",
            flaky: false,
            jobName: "<value>",
            p95Duration: 6995.75,
            source: "<value>",
            testName: "<value>",
            totalRuns: 148829,
        },
    ],
    mostFailedTestsExtra: 967966,
    slowestTests: [
        {
            classname: "<value>",
            failedRuns: 131852,
            file: "<value>",
            flaky: false,
            jobName: "<value>",
            p95Duration: 9944.01,
            source: "<value>",
            testName: "<value>",
            totalRuns: 707918,
        },
    ],
    slowestTestsExtra: 451822,
    testRuns: [
        {
            pipelineNumber: 709072,
            successRate: 708.69,
            testCounts: {
                error: 611749,
                failure: 292794,
                skipped: 671907,
                success: 152354,
                total: 447516,
            },
            workflowId: "<value>",
        },
    ],
    totalTestRuns: 417486,
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