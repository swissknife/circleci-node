# GetProjectWorkflowsPageDataInsightsTrends

Trends aggregated across a workflow or branch for a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataInsightsTrends } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataInsightsTrends = {
    p95DurationSecs: 6995.75,
    successRate: 1488.29,
    totalCreditsUsed: 9679.66,
    totalRuns: 1318.52,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `p95DurationSecs`                                            | *number*                                                     | :heavy_check_mark:                                           | The 95th percentile duration among a group of workflow runs. |
| `successRate`                                                | *number*                                                     | :heavy_check_mark:                                           | The trend value for the success rate.                        |
| `totalCreditsUsed`                                           | *number*                                                     | :heavy_check_mark:                                           | The trend value for total credits consumed.                  |
| `totalRuns`                                                  | *number*                                                     | :heavy_check_mark:                                           | The trend value for total number of runs.                    |