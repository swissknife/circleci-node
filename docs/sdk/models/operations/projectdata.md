# ProjectData

Metrics and trends data aggregated for a given project.

## Example Usage

```typescript
import { ProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectData = {
    metrics: {
        successRate: 5468.85,
        throughput: 9795.74,
        totalCreditsUsed: 274823,
        totalDurationSecs: 148478,
        totalRuns: 592231,
    },
    trends: {
        successRate: 2587.02,
        throughput: 8967.62,
        totalCreditsUsed: 2155.29,
        totalDurationSecs: 4067.33,
        totalRuns: 5799.12,
    },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                             | [operations.GetProjectWorkflowsPageDataMetrics](../../../sdk/models/operations/getprojectworkflowspagedatametrics.md) | :heavy_check_mark:                                                                                                    | Metrics aggregated across all workflows and branches for a project.                                                   |
| `trends`                                                                                                              | [operations.GetProjectWorkflowsPageDataTrends](../../../sdk/models/operations/getprojectworkflowspagedatatrends.md)   | :heavy_check_mark:                                                                                                    | Metric trends aggregated across all workflows and branches for a project.                                             |