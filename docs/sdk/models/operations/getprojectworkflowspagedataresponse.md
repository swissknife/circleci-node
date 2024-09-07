# GetProjectWorkflowsPageDataResponse

## Example Usage

```typescript
import { GetProjectWorkflowsPageDataResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowsPageDataResponse = {
    allBranches: ["main"],
    allWorkflows: ["build-and-test"],
    projectWorkflowBranchData: [
        {
            branch: "main",
            metrics: {
                p95DurationSecs: 8880.44,
                successRate: 5058.66,
                totalCreditsUsed: 708609,
                totalRuns: 310381,
            },
            trends: {
                p95DurationSecs: 2777.73,
                successRate: 3730.35,
                totalCreditsUsed: 8948.64,
                totalRuns: 5249.7,
            },
            workflowName: "build-and-test",
        },
    ],
    projectWorkflowData: [
        {
            metrics: {
                p95DurationSecs: 265.22,
                successRate: 7505.95,
                totalCreditsUsed: 625637,
                totalRuns: 333507,
            },
            trends: {
                p95DurationSecs: 3295.43,
                successRate: 9241.59,
                totalCreditsUsed: 9671.22,
                totalRuns: 8623.19,
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

