# GetOrgSummaryDataMetrics

Metrics for a single org metrics.

## Example Usage

```typescript
import { GetOrgSummaryDataMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataMetrics = {
  successRate: 8897.94,
  throughput: 7645.62,
  totalCreditsUsed: 698249,
  totalDurationSecs: 335498,
  totalRuns: 147685,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `successRate`                                                               | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `throughput`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | The average number of runs per day.                                         |
| `totalCreditsUsed`                                                          | *number*                                                                    | :heavy_check_mark:                                                          | The total credits consumed over the current timeseries interval.            |
| `totalDurationSecs`                                                         | *number*                                                                    | :heavy_check_mark:                                                          | Total duration, in seconds.                                                 |
| `totalRuns`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The total number of runs, including runs that are still on-hold or running. |