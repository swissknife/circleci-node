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
                    max: 621679,
                    mean: 575751,
                    median: 863023,
                    min: 820767,
                    p95: 157632,
                    standardDeviation: 9088.44,
                },
                failedRuns: 992430,
                mttr: 815524,
                successRate: 850.01,
                successfulRuns: 159414,
                throughput: 944.58,
                totalCreditsUsed: 628899,
                totalRecoveries: 633608,
                totalRuns: 398434,
            },
            name: "build-and-test",
            projectId: "<value>",
            windowEnd: new Date("2024-11-06T10:19:15.251Z"),
            windowStart: new Date("2022-03-10T17:36:05.100Z"),
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