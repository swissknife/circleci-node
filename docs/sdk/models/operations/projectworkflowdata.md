# ProjectWorkflowData

## Example Usage

```typescript
import { ProjectWorkflowData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectWorkflowData = {
  metrics: {
    p95DurationSecs: 5112.22,
    successRate: 832.91,
    totalCreditsUsed: 51075,
    totalRuns: 965517,
  },
  trends: {
    p95DurationSecs: 8590.03,
    successRate: 1520.27,
    totalCreditsUsed: 6.64,
    totalRuns: 9416.68,
  },
  workflowName: "build-and-test",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                                                             | [operations.GetProjectWorkflowsPageDataInsightsResponseMetrics](../../../sdk/models/operations/getprojectworkflowspagedatainsightsresponsemetrics.md) | :heavy_check_mark:                                                                                                                                    | Metrics aggregated across a workflow or branchfor a project.                                                                                          |                                                                                                                                                       |
| `trends`                                                                                                                                              | [operations.GetProjectWorkflowsPageDataInsightsResponseTrends](../../../sdk/models/operations/getprojectworkflowspagedatainsightsresponsetrends.md)   | :heavy_check_mark:                                                                                                                                    | Trends aggregated across a workflow or branch for a project.                                                                                          |                                                                                                                                                       |
| `workflowName`                                                                                                                                        | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The name of the workflow.                                                                                                                             | build-and-test                                                                                                                                        |