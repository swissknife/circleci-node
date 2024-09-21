# GetProjectWorkflowsPageDataTrends

Metric trends aggregated across all workflows and branches for a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataTrends = {
  successRate: 2168.70,
  throughput: 9031.50,
  totalCreditsUsed: 429.24,
  totalDurationSecs: 3330.72,
  totalRuns: 997.33,
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