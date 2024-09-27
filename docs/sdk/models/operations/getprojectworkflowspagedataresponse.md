# GetProjectWorkflowsPageDataResponse


## Supported Types

### `operations.GetProjectWorkflowsPageDataResponseBody`

```typescript
const value: operations.GetProjectWorkflowsPageDataResponseBody = {
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
        p95DurationSecs: 9132.84,
        successRate: 5245.77,
        totalCreditsUsed: 354225,
        totalRuns: 120277,
      },
      trends: {
        p95DurationSecs: 7549.01,
        successRate: 8850.22,
        totalCreditsUsed: 1002.52,
        totalRuns: 7589.85,
      },
      workflowName: "build-and-test",
    },
  ],
  projectWorkflowData: [
    {
      metrics: {
        p95DurationSecs: 170.60,
        successRate: 9670.55,
        totalCreditsUsed: 615058,
        totalRuns: 552439,
      },
      trends: {
        p95DurationSecs: 2959.50,
        successRate: 9292.92,
        totalCreditsUsed: 2659.06,
        totalRuns: 8281.47,
      },
      workflowName: "build-and-test",
    },
  ],
};
```

### `operations.GetProjectWorkflowsPageDataInsightsResponseBody`

```typescript
const value: operations.GetProjectWorkflowsPageDataInsightsResponseBody = {};
```

