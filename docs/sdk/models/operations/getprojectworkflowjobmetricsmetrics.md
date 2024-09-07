# GetProjectWorkflowJobMetricsMetrics

Metrics relating to a workflow job's runs.

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsMetrics = {
    durationMetrics: {
        max: 373813,
        mean: 69859,
        median: 587600,
        min: 9688,
        p95: 272822,
        standardDeviation: 8920.5,
    },
    failedRuns: 370853,
    successRate: 1334.65,
    successfulRuns: 197054,
    throughput: 7791.92,
    totalCreditsUsed: 459856,
    totalRuns: 925164,
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `durationMetrics`                                                                                                                                                            | [operations.GetProjectWorkflowJobMetricsDurationMetrics](../../../sdk/models/operations/getprojectworkflowjobmetricsdurationmetrics.md)                                      | :heavy_check_mark:                                                                                                                                                           | Metrics relating to the duration of runs for a workflow job.                                                                                                                 |
| `failedRuns`                                                                                                                                                                 | *number*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The number of failed runs.                                                                                                                                                   |
| `successRate`                                                                                                                                                                | *number*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `successfulRuns`                                                                                                                                                             | *number*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The number of successful runs.                                                                                                                                               |
| `throughput`                                                                                                                                                                 | *number*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The average number of runs per day.                                                                                                                                          |
| `totalCreditsUsed`                                                                                                                                                           | *number*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The total credits consumed by the job in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting. |
| `totalRuns`                                                                                                                                                                  | *number*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The total number of runs, including runs that are still on-hold or running.                                                                                                  |