# ProjectData

Metrics and trends data aggregated for a given project.

## Example Usage

```typescript
import { ProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectData = {
  metrics: {
    successRate: 4714.57,
    throughput: 680.93,
    totalCreditsUsed: 943851,
    totalDurationSecs: 964925,
    totalRuns: 719389,
  },
  trends: {
    successRate: 3499.93,
    throughput: 2543.82,
    totalCreditsUsed: 2653.03,
    totalDurationSecs: 1272.94,
    totalRuns: 5258.09,
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                             | [operations.GetProjectWorkflowsPageDataMetrics](../../../sdk/models/operations/getprojectworkflowspagedatametrics.md) | :heavy_check_mark:                                                                                                    | Metrics aggregated across all workflows and branches for a project.                                                   |
| `trends`                                                                                                              | [operations.GetProjectWorkflowsPageDataTrends](../../../sdk/models/operations/getprojectworkflowspagedatatrends.md)   | :heavy_check_mark:                                                                                                    | Metric trends aggregated across all workflows and branches for a project.                                             |