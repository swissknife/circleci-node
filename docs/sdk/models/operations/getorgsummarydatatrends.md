# GetOrgSummaryDataTrends

Trends for a single project, across all branches.

## Example Usage

```typescript
import { GetOrgSummaryDataTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataTrends = {
  successRate: 7372.54,
  totalCreditsUsed: 1097.84,
  totalDurationSecs: 6063.08,
  totalRuns: 7032.17,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `successRate`                               | *number*                                    | :heavy_check_mark:                          | The trend value for the success rate.       |
| `totalCreditsUsed`                          | *number*                                    | :heavy_check_mark:                          | The trend value for total credits consumed. |
| `totalDurationSecs`                         | *number*                                    | :heavy_check_mark:                          | Trend value for total duration.             |
| `totalRuns`                                 | *number*                                    | :heavy_check_mark:                          | The trend value for total number of runs.   |