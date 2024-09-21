# GetOrgSummaryDataInsightsMetrics

Metrics for a single project, across all branches.

## Example Usage

```typescript
import { GetOrgSummaryDataInsightsMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataInsightsMetrics = {
  successRate: 1478.09,
  totalCreditsUsed: 684935,
  totalDurationSecs: 656762,
  totalRuns: 862063,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `successRate`                                                               | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `totalCreditsUsed`                                                          | *number*                                                                    | :heavy_check_mark:                                                          | The total credits consumed over the current timeseries interval.            |
| `totalDurationSecs`                                                         | *number*                                                                    | :heavy_check_mark:                                                          | Total duration, in seconds.                                                 |
| `totalRuns`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The total number of runs, including runs that are still on-hold or running. |