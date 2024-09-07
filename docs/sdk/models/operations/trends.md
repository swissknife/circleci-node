# Trends

Trends for aggregated metrics across a workflow for a given time window.

## Example Usage

```typescript
import { Trends } from "circleci-v2-sdk/sdk/models/operations";

let value: Trends = {
    failedRuns: 6390.28,
    medianDurationSecs: 6762.43,
    mttr: 5483.61,
    p95DurationSecs: 8792.35,
    successRate: 2726.83,
    throughput: 5436.78,
    totalCreditsUsed: 1482.68,
    totalRuns: 2826.99,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `failedRuns`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | The trend value for number of failed runs.                                           |
| `medianDurationSecs`                                                                 | *number*                                                                             | :heavy_check_mark:                                                                   | Trend value for the 50th percentile duration for a workflow for a given time window. |
| `mttr`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | trend for mean time to recovery (mean time between failures and their next success). |
| `p95DurationSecs`                                                                    | *number*                                                                             | :heavy_check_mark:                                                                   | Trend value for the 95th percentile duration for a workflow for a given time window. |
| `successRate`                                                                        | *number*                                                                             | :heavy_check_mark:                                                                   | The trend value for the success rate.                                                |
| `throughput`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | Trend value for the average number of runs per day.                                  |
| `totalCreditsUsed`                                                                   | *number*                                                                             | :heavy_check_mark:                                                                   | The trend value for total credits consumed.                                          |
| `totalRuns`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | The trend value for total number of runs.                                            |