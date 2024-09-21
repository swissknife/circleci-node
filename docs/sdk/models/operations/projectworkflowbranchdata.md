# ProjectWorkflowBranchData

## Example Usage

```typescript
import { ProjectWorkflowBranchData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectWorkflowBranchData = {
  branch: "main",
  metrics: {
    p95DurationSecs: 1623.58,
    successRate: 2908.41,
    totalCreditsUsed: 179795,
    totalRuns: 345506,
  },
  trends: {
    p95DurationSecs: 4800.61,
    successRate: 5221.76,
    totalCreditsUsed: 8536.06,
    totalRuns: 8894.48,
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