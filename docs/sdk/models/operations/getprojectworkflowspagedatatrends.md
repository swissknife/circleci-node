# GetProjectWorkflowsPageDataTrends

Metric trends aggregated across all workflows and branches for a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataTrends = {
  successRate: 8483.45,
  throughput: 4904.20,
  totalCreditsUsed: 1853.49,
  totalDurationSecs: 9958.15,
  totalRuns: 1293.56,
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