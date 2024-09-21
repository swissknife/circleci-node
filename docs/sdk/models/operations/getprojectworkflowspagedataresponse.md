# GetProjectWorkflowsPageDataResponse

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataResponse = {
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
        p95DurationSecs: 5068.63,
        successRate: 7368.53,
        totalCreditsUsed: 97676,
        totalRuns: 514922,
      },
      trends: {
        p95DurationSecs: 9384.12,
        successRate: 2286.47,
        totalCreditsUsed: 6771.41,
        totalRuns: 5928.80,
      },
      workflowName: "build-and-test",
    },
  ],
  projectWorkflowData: [
    {
      metrics: {
        p95DurationSecs: 100.64,
        successRate: 4758.26,
        totalCreditsUsed: 708771,
        totalRuns: 43975,
      },
      trends: {
        p95DurationSecs: 8795.21,
        successRate: 5200.81,
        totalCreditsUsed: 306.61,
        totalRuns: 2244.14,
      },
      workflowName: "build-and-test",
    },
  ],
};
```

## Supported Types

### `operations.GetProjectWorkflowsPageDataResponseBody`

```typescript
const value: operations.GetProjectWorkflowsPageDataResponseBody = /* values here */
```

### `operations.GetProjectWorkflowsPageDataInsightsResponseBody`

```typescript
const value: operations.GetProjectWorkflowsPageDataInsightsResponseBody = /* values here */
```

