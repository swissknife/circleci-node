# GetOrgSummaryDataInsightsTrends

Trends for a single org.

## Example Usage

```typescript
import { GetOrgSummaryDataInsightsTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataInsightsTrends = {
  successRate: 4037.93,
  throughput: 3998.12,
  totalCreditsUsed: 6713.83,
  totalDurationSecs: 3447.18,
  totalRuns: 7137.67,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `successRate`                                       | *number*                                            | :heavy_check_mark:                                  | The trend value for the success rate.               |
| `throughput`                                        | *number*                                            | :heavy_check_mark:                                  | Trend value for the average number of runs per day. |
| `totalCreditsUsed`                                  | *number*                                            | :heavy_check_mark:                                  | The trend value for total credits consumed.         |
| `totalDurationSecs`                                 | *number*                                            | :heavy_check_mark:                                  | Trend value for total duration.                     |
| `totalRuns`                                         | *number*                                            | :heavy_check_mark:                                  | The trend value for total number of runs.           |