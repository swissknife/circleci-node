# GetProjectWorkflowMetricsResponseBody

Paginated workflow summary metrics.

## Example Usage

```typescript
import { GetProjectWorkflowMetricsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowMetricsResponseBody = {
  items: [
    {
      metrics: {
        durationMetrics: {
          max: 426904,
          mean: 842855,
          median: 818034,
          min: 102413,
          p95: 156383,
          standardDeviation: 3041.99,
        },
        failedRuns: 75359,
        mttr: 424663,
        successRate: 1076.18,
        successfulRuns: 568218,
        throughput: 2465.57,
        totalCreditsUsed: 596433,
        totalRecoveries: 117525,
        totalRuns: 975884,
      },
      name: "build-and-test",
      projectId: "<value>",
      windowEnd: new Date("2024-10-19T02:05:23.663Z"),
      windowStart: new Date("2023-03-06T09:49:36.019Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                         | [operations.GetProjectWorkflowMetricsItems](../../../sdk/models/operations/getprojectworkflowmetricsitems.md)[] | :heavy_check_mark:                                                                                              | Workflow summary metrics.                                                                                       |
| `nextPageToken`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | A token to pass as a `page-token` query parameter to return the next page of results.                           |