# GetProjectWorkflowJobMetricsMetrics

Metrics relating to a workflow job's runs.

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsMetrics = {
  durationMetrics: {
    max: 524380,
    mean: 117380,
    median: 159845,
    min: 46806,
    p95: 970732,
    standardDeviation: 38.60,
  },
  failedRuns: 178580,
  successRate: 6128.67,
  successfulRuns: 81369,
  throughput: 8818.97,
  totalCreditsUsed: 719620,
  totalRuns: 966390,
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