# GetOrgSummaryDataInsightsMetrics

Metrics for a single project, across all branches.

## Example Usage

```typescript
import { GetOrgSummaryDataInsightsMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataInsightsMetrics = {
    successRate: 8827.1,
    totalCreditsUsed: 306810,
    totalDurationSecs: 488410,
    totalRuns: 577543,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `successRate`                                                               | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `totalCreditsUsed`                                                          | *number*                                                                    | :heavy_check_mark:                                                          | The total credits consumed over the current timeseries interval.            |
| `totalDurationSecs`                                                         | *number*                                                                    | :heavy_check_mark:                                                          | Total duration, in seconds.                                                 |
| `totalRuns`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The total number of runs, including runs that are still on-hold or running. |