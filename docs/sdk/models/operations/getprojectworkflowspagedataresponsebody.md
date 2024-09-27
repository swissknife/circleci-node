# GetProjectWorkflowsPageDataResponseBody

Aggregated summary metrics and trends by workflow and branches

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataResponseBody = {
  allBranches: [
    "main",
  ],
  allWorkflows: [
    "build-and-test",
  ],
  projectWorkflowBranchData: [
    {
      branch: "main",
      metrics: {
        p95DurationSecs: 2783.25,
        successRate: 1858.98,
        totalCreditsUsed: 691508,
        totalRuns: 108903,
      },
      trends: {
        p95DurationSecs: 2646.50,
        successRate: 9750.95,
        totalCreditsUsed: 6394.63,
        totalRuns: 5206.78,
      },
      workflowName: "build-and-test",
    },
  ],
  projectWorkflowData: [
    {
      metrics: {
        p95DurationSecs: 3979.19,
        successRate: 7745.01,
        totalCreditsUsed: 140957,
        totalRuns: 967338,
      },
      trends: {
        p95DurationSecs: 8611.23,
        successRate: 6176.57,
        totalCreditsUsed: 429.06,
        totalRuns: 7008.56,
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