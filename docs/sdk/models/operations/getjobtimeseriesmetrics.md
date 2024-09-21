# GetJobTimeseriesMetrics

Metrics relating to a workflow's runs.

## Example Usage

```typescript
import { GetJobTimeseriesMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesMetrics = {
  durationMetrics: {
    max: 247399,
    median: 39615,
    min: 59944,
    p95: 61078,
    total: 907733,
  },
  failedRuns: 739884,
  medianCreditsUsed: 898063,
  successfulRuns: 672582,
  throughput: 5289.40,
  totalCreditsUsed: 304446,
  totalRuns: 997963,
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