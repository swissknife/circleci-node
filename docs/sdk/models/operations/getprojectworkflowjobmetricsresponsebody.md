# GetProjectWorkflowJobMetricsResponseBody

Paginated workflow job summary metrics.

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsResponseBody = {
    items: [
        {
            metrics: {
                durationMetrics: {
                    max: 645570,
                    mean: 475289,
                    median: 35362,
                    min: 783648,
                    p95: 430402,
                    standardDeviation: 5564.29,
                },
                failedRuns: 510017,
                successRate: 1598.67,
                successfulRuns: 536178,
                throughput: 1438.29,
                totalCreditsUsed: 681393,
                totalRuns: 649463,
            },
            name: "<value>",
            windowEnd: new Date("2022-11-01T05:53:15.603Z"),
            windowStart: new Date("2023-08-14T23:44:14.976Z"),
        },
    ],
    nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                               | [operations.GetProjectWorkflowJobMetricsItems](../../../sdk/models/operations/getprojectworkflowjobmetricsitems.md)[] | :heavy_check_mark:                                                                                                    | Job summary metrics.                                                                                                  |
| `nextPageToken`                                                                                                       | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | A token to pass as a `page-token` query parameter to return the next page of results.                                 |