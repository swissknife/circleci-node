# ProjectWorkflowData

## Example Usage

```typescript
import { ProjectWorkflowData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectWorkflowData = {
  metrics: {
    p95DurationSecs: 3828.08,
    successRate: 9602.57,
    totalCreditsUsed: 895386,
    totalRuns: 72434,
  },
  trends: {
    p95DurationSecs: 9677.95,
    successRate: 193,
    totalCreditsUsed: 5468.85,
    totalRuns: 9795.74,
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