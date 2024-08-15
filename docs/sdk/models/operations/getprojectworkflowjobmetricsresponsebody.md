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
                    max: 857723,
                    mean: 557811,
                    median: 457223,
                    min: 97468,
                    p95: 951875,
                    standardDeviation: 6216.79,
                },
                failedRuns: 575751,
                successRate: 8630.23,
                successfulRuns: 820767,
                throughput: 1576.32,
                totalCreditsUsed: 908844,
                totalRuns: 992430,
            },
            name: "<value>",
            windowEnd: new Date("2024-06-12T19:32:19.262Z"),
            windowStart: new Date("2022-04-04T03:52:05.283Z"),
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