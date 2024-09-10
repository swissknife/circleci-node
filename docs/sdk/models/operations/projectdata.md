# ProjectData

Metrics and trends data aggregated for a given project.

## Example Usage

```typescript
import { ProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectData = {
  metrics: {
    successRate: 2377.42,
    throughput: 7383.91,
    totalCreditsUsed: 502389,
    totalDurationSecs: 555361,
    totalRuns: 942584,
  },
  trends: {
    successRate: 2015.17,
    throughput: 6339.98,
    totalCreditsUsed: 5485.19,
    totalDurationSecs: 8672.9,
    totalRuns: 5196.43,
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                             | [operations.GetProjectWorkflowsPageDataMetrics](../../../sdk/models/operations/getprojectworkflowspagedatametrics.md) | :heavy_check_mark:                                                                                                    | Metrics aggregated across all workflows and branches for a project.                                                   |
| `trends`                                                                                                              | [operations.GetProjectWorkflowsPageDataTrends](../../../sdk/models/operations/getprojectworkflowspagedatatrends.md)   | :heavy_check_mark:                                                                                                    | Metric trends aggregated across all workflows and branches for a project.                                             |