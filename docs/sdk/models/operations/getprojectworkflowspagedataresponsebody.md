# GetProjectWorkflowsPageDataResponseBody

Aggregated summary metrics and trends by workflow and branches

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataResponseBody = {
    allBranches: ["main"],
    allWorkflows: ["build-and-test"],
    projectWorkflowBranchData: [
        {
            branch: "main",
            metrics: {
                p95DurationSecs: 2748.23,
                successRate: 1484.78,
                totalCreditsUsed: 592231,
                totalRuns: 258702,
            },
            trends: {
                p95DurationSecs: 8967.62,
                successRate: 2155.29,
                totalCreditsUsed: 4067.33,
                totalRuns: 5799.12,
            },
            workflowName: "build-and-test",
        },
    ],
    projectWorkflowData: [
        {
            metrics: {
                p95DurationSecs: 5520.78,
                successRate: 9757.52,
                totalCreditsUsed: 271653,
                totalRuns: 273009,
            },
            trends: {
                p95DurationSecs: 4554.44,
                successRate: 9700.76,
                totalCreditsUsed: 4017.13,
                totalRuns: 254.97,
            },
            workflowName: "build-and-test",
        },
    ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `allBranches`                                                                                         | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | A list of all the branches for a given project.                                                       |
| `allWorkflows`                                                                                        | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | A list of all the workflows for a given project.                                                      |
| `orgId`                                                                                               | *any*                                                                                                 | :heavy_minus_sign:                                                                                    | The unique ID of the organization                                                                     |
| `projectData`                                                                                         | [operations.ProjectData](../../../sdk/models/operations/projectdata.md)                               | :heavy_minus_sign:                                                                                    | Metrics and trends data aggregated for a given project.                                               |
| `projectId`                                                                                           | *any*                                                                                                 | :heavy_minus_sign:                                                                                    | The unique ID of the project                                                                          |
| `projectWorkflowBranchData`                                                                           | [operations.ProjectWorkflowBranchData](../../../sdk/models/operations/projectworkflowbranchdata.md)[] | :heavy_minus_sign:                                                                                    | A list of metrics and trends data for branches for a given project.                                   |
| `projectWorkflowData`                                                                                 | [operations.ProjectWorkflowData](../../../sdk/models/operations/projectworkflowdata.md)[]             | :heavy_minus_sign:                                                                                    | A list of metrics and trends data for workflows for a given project.                                  |