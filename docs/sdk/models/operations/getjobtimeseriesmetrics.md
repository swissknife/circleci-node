# GetJobTimeseriesMetrics

Metrics relating to a workflow's runs.

## Example Usage

```typescript
import { GetJobTimeseriesMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesMetrics = {
  durationMetrics: {
    max: 486160,
    median: 630448,
    min: 708548,
    p95: 874288,
    total: 498140,
  },
  failedRuns: 293020,
  medianCreditsUsed: 844550,
  successfulRuns: 848944,
  throughput: 1943.42,
  totalCreditsUsed: 617877,
  totalRuns: 773326,
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