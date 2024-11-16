# GetOrgSummaryDataTrends

Trends for a single project, across all branches.

## Example Usage

```typescript
import { GetOrgSummaryDataTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataTrends = {
  successRate: 5910.27,
  totalCreditsUsed: 6591.76,
  totalDurationSecs: 3972.57,
  totalRuns: 9992.78,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `successRate`                               | *number*                                    | :heavy_check_mark:                          | The trend value for the success rate.       |
| `totalCreditsUsed`                          | *number*                                    | :heavy_check_mark:                          | The trend value for total credits consumed. |
| `totalDurationSecs`                         | *number*                                    | :heavy_check_mark:                          | Trend value for total duration.             |
| `totalRuns`                                 | *number*                                    | :heavy_check_mark:                          | The trend value for total number of runs.   |