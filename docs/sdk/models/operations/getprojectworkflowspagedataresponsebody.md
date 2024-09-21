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
        p95DurationSecs: 5349.08,
        successRate: 2902.48,
        totalCreditsUsed: 304173,
        totalRuns: 591065,
      },
      trends: {
        p95DurationSecs: 9217.19,
        successRate: 8052.64,
        totalCreditsUsed: 7239.41,
        totalRuns: 5591.74,
      },
      workflowName: "build-and-test",
    },
  ],
  projectWorkflowData: [
    {
      metrics: {
        p95DurationSecs: 9222.99,
        successRate: 4923.61,
        totalCreditsUsed: 873833,
        totalRuns: 833982,
      },
      trends: {
        p95DurationSecs: 2138.35,
        successRate: 7712.25,
        totalCreditsUsed: 121.71,
        totalRuns: 3228.30,
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