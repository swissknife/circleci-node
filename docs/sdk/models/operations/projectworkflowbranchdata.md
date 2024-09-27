# ProjectWorkflowBranchData

## Example Usage

```typescript
import { ProjectWorkflowBranchData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectWorkflowBranchData = {
  branch: "main",
  metrics: {
    p95DurationSecs: 4753.25,
    successRate: 9692.06,
    totalCreditsUsed: 265632,
    totalRuns: 13508,
  },
  trends: {
    p95DurationSecs: 4837.53,
    successRate: 2561.14,
    totalCreditsUsed: 8237.18,
    totalRuns: 2327.73,
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