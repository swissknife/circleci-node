# GetProjectWorkflowsPageDataTrends

Metric trends aggregated across all workflows and branches for a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataTrends = {
  successRate: 2962.42,
  throughput: 3044.68,
  totalCreditsUsed: 8859.63,
  totalDurationSecs: 8391.89,
  totalRuns: 3518.7,
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