# GetProjectWorkflowsPageDataInsightsResponseTrends

Trends aggregated across a workflow or branch for a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataInsightsResponseTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataInsightsResponseTrends = {
  p95DurationSecs: 7049.48,
  successRate: 4186.37,
  totalCreditsUsed: 53.10,
  totalRuns: 113.55,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `p95DurationSecs`                                            | *number*                                                     | :heavy_check_mark:                                           | The 95th percentile duration among a group of workflow runs. |
| `successRate`                                                | *number*                                                     | :heavy_check_mark:                                           | The trend value for the success rate.                        |
| `totalCreditsUsed`                                           | *number*                                                     | :heavy_check_mark:                                           | The trend value for total credits consumed.                  |
| `totalRuns`                                                  | *number*                                                     | :heavy_check_mark:                                           | The trend value for total number of runs.                    |