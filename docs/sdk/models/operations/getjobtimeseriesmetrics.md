# GetJobTimeseriesMetrics

Metrics relating to a workflow's runs.

## Example Usage

```typescript
import { GetJobTimeseriesMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesMetrics = {
    durationMetrics: {
        max: 533466,
        median: 770581,
        min: 304582,
        p95: 146946,
        total: 882860,
    },
    failedRuns: 79522,
    medianCreditsUsed: 250622,
    successfulRuns: 89603,
    throughput: 6774.12,
    totalCreditsUsed: 672048,
    totalRuns: 810424,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `durationMetrics`                                                                                               | [operations.GetJobTimeseriesDurationMetrics](../../../sdk/models/operations/getjobtimeseriesdurationmetrics.md) | :heavy_check_mark:                                                                                              | Metrics relating to the duration of runs for a workflow.                                                        |
| `failedRuns`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The number of failed runs.                                                                                      |
| `medianCreditsUsed`                                                                                             | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The median credits consumed over the current timeseries interval.                                               |
| `successfulRuns`                                                                                                | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The number of successful runs.                                                                                  |
| `throughput`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The average number of runs per day.                                                                             |
| `totalCreditsUsed`                                                                                              | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The total credits consumed over the current timeseries interval.                                                |
| `totalRuns`                                                                                                     | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The total number of runs, including runs that are still on-hold or running.                                     |