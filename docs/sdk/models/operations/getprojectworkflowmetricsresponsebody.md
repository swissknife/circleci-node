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
          max: 858338,
          mean: 802894,
          median: 159146,
          min: 605712,
          p95: 115661,
          standardDeviation: 7278.88,
        },
        failedRuns: 637462,
        mttr: 811939,
        successRate: 4793.85,
        successfulRuns: 914864,
        throughput: 493.49,
        totalCreditsUsed: 292888,
        totalRecoveries: 715053,
        totalRuns: 418109,
      },
      name: "build-and-test",
      projectId: "<value>",
      windowEnd: new Date("2022-07-09T13:18:44.722Z"),
      windowStart: new Date("2022-04-28T12:04:17.212Z"),
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