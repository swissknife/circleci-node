# GetProjectWorkflowsPageDataMetrics

Metrics aggregated across all workflows and branches for a project.

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataMetrics = {
    successRate: 2378.07,
    throughput: 7955.35,
    totalCreditsUsed: 171853,
    totalDurationSecs: 503934,
    totalRuns: 449292,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `successRate`                                                               | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `throughput`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | The average number of runs per day.                                         |
| `totalCreditsUsed`                                                          | *number*                                                                    | :heavy_check_mark:                                                          | The total credits consumed over the current timeseries interval.            |
| `totalDurationSecs`                                                         | *number*                                                                    | :heavy_check_mark:                                                          | Total duration, in seconds.                                                 |
| `totalRuns`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The total number of runs, including runs that are still on-hold or running. |