# ProjectWorkflowBranchData

## Example Usage

```typescript
import { ProjectWorkflowBranchData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectWorkflowBranchData = {
    branch: "main",
    metrics: {
        p95DurationSecs: 9944.01,
        successRate: 7079.18,
        totalCreditsUsed: 451822,
        totalRuns: 709072,
    },
    trends: {
        p95DurationSecs: 708.69,
        successRate: 6117.49,
        totalCreditsUsed: 2927.94,
        totalRuns: 6719.07,
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