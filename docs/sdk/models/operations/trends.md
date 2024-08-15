# Trends

Trends for aggregated metrics across a workflow for a given time window.

## Example Usage

```typescript
import { Trends } from "circleci-v2-sdk/sdk/models/operations";

let value: Trends = {
    failedRuns: 1536.27,
    medianDurationSecs: 243.13,
    mttr: 4255.08,
    p95DurationSecs: 3426.11,
    successRate: 9061.72,
    throughput: 6222.31,
    totalCreditsUsed: 85.11,
    totalRuns: 2790.68,
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