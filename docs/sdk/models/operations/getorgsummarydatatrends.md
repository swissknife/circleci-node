# GetOrgSummaryDataTrends

Trends for a single project, across all branches.

## Example Usage

```typescript
import { GetOrgSummaryDataTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataTrends = {
    successRate: 4145.67,
    totalCreditsUsed: 9594.34,
    totalDurationSecs: 1741.12,
    totalRuns: 6455.7,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `successRate`                               | *number*                                    | :heavy_check_mark:                          | The trend value for the success rate.       |
| `totalCreditsUsed`                          | *number*                                    | :heavy_check_mark:                          | The trend value for total credits consumed. |
| `totalDurationSecs`                         | *number*                                    | :heavy_check_mark:                          | Trend value for total duration.             |
| `totalRuns`                                 | *number*                                    | :heavy_check_mark:                          | The trend value for total number of runs.   |