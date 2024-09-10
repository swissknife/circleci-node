# GetProjectWorkflowsPageDataInsightsResponseTrends

Trends aggregated across a workflow or branch for a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataInsightsResponseTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataInsightsResponseTrends = {
  p95DurationSecs: 1312.89,
  successRate: 3783.26,
  totalCreditsUsed: 6041.18,
  totalRuns: 1000.32,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `p95DurationSecs`                                            | *number*                                                     | :heavy_check_mark:                                           | The 95th percentile duration among a group of workflow runs. |
| `successRate`                                                | *number*                                                     | :heavy_check_mark:                                           | The trend value for the success rate.                        |
| `totalCreditsUsed`                                           | *number*                                                     | :heavy_check_mark:                                           | The trend value for total credits consumed.                  |
| `totalRuns`                                                  | *number*                                                     | :heavy_check_mark:                                           | The trend value for total number of runs.                    |