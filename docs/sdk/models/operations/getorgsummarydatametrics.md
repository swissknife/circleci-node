# GetOrgSummaryDataMetrics

Metrics for a single project, across all branches.

## Example Usage

```typescript
import { GetOrgSummaryDataMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataMetrics = {
  successRate: 9704.94,
  totalCreditsUsed: 133439,
  totalDurationSecs: 96804,
  totalRuns: 343392,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `successRate`                                                               | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `totalCreditsUsed`                                                          | *number*                                                                    | :heavy_check_mark:                                                          | The total credits consumed over the current timeseries interval.            |
| `totalDurationSecs`                                                         | *number*                                                                    | :heavy_check_mark:                                                          | Total duration, in seconds.                                                 |
| `totalRuns`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The total number of runs, including runs that are still on-hold or running. |