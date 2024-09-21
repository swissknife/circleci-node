# GetProjectWorkflowsPageDataInsightsMetrics

Metrics aggregated across a workflow or branchfor a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataInsightsMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataInsightsMetrics = {
  p95DurationSecs: 3952.33,
  successRate: 3108.40,
  totalCreditsUsed: 718627,
  totalRuns: 335977,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `p95DurationSecs`                                                           | *number*                                                                    | :heavy_check_mark:                                                          | The 95th percentile duration among a group of workflow runs.                |
| `successRate`                                                               | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `totalCreditsUsed`                                                          | *number*                                                                    | :heavy_check_mark:                                                          | The total credits consumed over the current timeseries interval.            |
| `totalRuns`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The total number of runs, including runs that are still on-hold or running. |