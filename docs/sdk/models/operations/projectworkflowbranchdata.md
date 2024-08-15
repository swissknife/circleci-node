# ProjectWorkflowBranchData

## Example Usage

```typescript
import { ProjectWorkflowBranchData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectWorkflowBranchData = {
    branch: "main",
    metrics: {
        p95DurationSecs: 2484.13,
        successRate: 8880.44,
        totalCreditsUsed: 505866,
        totalRuns: 708609,
    },
    trends: {
        p95DurationSecs: 3103.81,
        successRate: 2777.73,
        totalCreditsUsed: 3730.35,
        totalRuns: 8948.64,
    },
    workflowName: "build-and-test",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `branch`                                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The VCS branch of a workflow's trigger.                                                                                               | main                                                                                                                                  |
| `metrics`                                                                                                                             | [operations.GetProjectWorkflowsPageDataInsightsMetrics](../../../sdk/models/operations/getprojectworkflowspagedatainsightsmetrics.md) | :heavy_check_mark:                                                                                                                    | Metrics aggregated across a workflow or branchfor a project.                                                                          |                                                                                                                                       |
| `trends`                                                                                                                              | [operations.GetProjectWorkflowsPageDataInsightsTrends](../../../sdk/models/operations/getprojectworkflowspagedatainsightstrends.md)   | :heavy_check_mark:                                                                                                                    | Trends aggregated across a workflow or branch for a project.                                                                          |                                                                                                                                       |
| `workflowName`                                                                                                                        | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The name of the workflow.                                                                                                             | build-and-test                                                                                                                        |