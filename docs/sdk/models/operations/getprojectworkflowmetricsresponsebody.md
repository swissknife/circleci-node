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
                    max: 544591,
                    mean: 251941,
                    median: 32465,
                    min: 221161,
                    p95: 580152,
                    standardDeviation: 2531.91,
                },
                failedRuns: 771089,
                mttr: 131055,
                successRate: 3762.26,
                successfulRuns: 12036,
                throughput: 4910.25,
                totalCreditsUsed: 115484,
                totalRecoveries: 981640,
                totalRuns: 618480,
            },
            name: "build-and-test",
            projectId: "<value>",
            windowEnd: new Date("2022-09-26T03:18:38.371Z"),
            windowStart: new Date("2024-12-03T18:50:07.917Z"),
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