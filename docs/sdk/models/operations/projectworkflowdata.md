# ProjectWorkflowData

## Example Usage

```typescript
import { ProjectWorkflowData } from "circleci-v2-sdk/sdk/models/operations";

let value: ProjectWorkflowData = {
    metrics: {
        p95DurationSecs: 8623.19,
        successRate: 1685.76,
        totalCreditsUsed: 48690,
        totalRuns: 901483,
    },
    trends: {
        p95DurationSecs: 2536.42,
        successRate: 3299.35,
        totalCreditsUsed: 4461.35,
        totalRuns: 8892.34,
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