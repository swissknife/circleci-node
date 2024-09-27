# GetJobTimeseriesMetrics

Metrics relating to a workflow's runs.

## Example Usage

```typescript
import { GetJobTimeseriesMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesMetrics = {
  durationMetrics: {
    max: 284000,
    median: 238413,
    min: 514513,
    p95: 367927,
    total: 456520,
  },
  failedRuns: 337477,
  medianCreditsUsed: 970494,
  successfulRuns: 133439,
  throughput: 968.04,
  totalCreditsUsed: 343392,
  totalRuns: 591027,
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