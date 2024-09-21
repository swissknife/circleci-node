# ProjectWorkflowData

## Example Usage

```typescript
import { ProjectWorkflowData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectWorkflowData = {
  metrics: {
    p95DurationSecs: 691.83,
    successRate: 8791.73,
    totalCreditsUsed: 734814,
    totalRuns: 176499,
  },
  trends: {
    p95DurationSecs: 9391.61,
    successRate: 5063.12,
    totalCreditsUsed: 9998.09,
    totalRuns: 1972.59,
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