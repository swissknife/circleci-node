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
                p95DurationSecs: 1046.27,
                successRate: 5124.52,
                totalCreditsUsed: 348476,
                totalRuns: 510629,
            },
            trends: {
                p95DurationSecs: 7400.98,
                successRate: 3868.27,
                totalCreditsUsed: 6805.15,
                totalRuns: 5300.89,
            },
            workflowName: "build-and-test",
        },
    ],
    projectWorkflowData: [
        {
            metrics: {
                p95DurationSecs: 6223.85,
                successRate: 9447.08,
                totalCreditsUsed: 710529,
                totalRuns: 892863,
            },
            trends: {
                p95DurationSecs: 2049.23,
                successRate: 6771.15,
                totalCreditsUsed: 3416.98,
                totalRuns: 6390.28,
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