# GetProjectWorkflowsPageDataInsightsResponseMetrics

Metrics aggregated across a workflow or branchfor a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataInsightsResponseMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataInsightsResponseMetrics = {
  p95DurationSecs: 3106.29,
  successRate: 7912.27,
  totalCreditsUsed: 715143,
  totalRuns: 558051,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `p95DurationSecs`                                                           | *number*                                                                    | :heavy_check_mark:                                                          | The 95th percentile duration among a group of workflow runs.                |
| `successRate`                                                               | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `totalCreditsUsed`                                                          | *number*                                                                    | :heavy_check_mark:                                                          | The total credits consumed over the current timeseries interval.            |
| `totalRuns`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The total number of runs, including runs that are still on-hold or running. |