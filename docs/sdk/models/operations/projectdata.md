# ProjectData

Metrics and trends data aggregated for a given project.

## Example Usage

```typescript
import { ProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectData = {
  metrics: {
    successRate: 4755.89,
    throughput: 8200.22,
    totalCreditsUsed: 298187,
    totalDurationSecs: 150935,
    totalRuns: 330267,
  },
  trends: {
    successRate: 8138.80,
    throughput: 1403.84,
    totalCreditsUsed: 2273.62,
    totalDurationSecs: 688.52,
    totalRuns: 7057.10,
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                             | [operations.GetProjectWorkflowsPageDataMetrics](../../../sdk/models/operations/getprojectworkflowspagedatametrics.md) | :heavy_check_mark:                                                                                                    | Metrics aggregated across all workflows and branches for a project.                                                   |
| `trends`                                                                                                              | [operations.GetProjectWorkflowsPageDataTrends](../../../sdk/models/operations/getprojectworkflowspagedatatrends.md)   | :heavy_check_mark:                                                                                                    | Metric trends aggregated across all workflows and branches for a project.                                             |