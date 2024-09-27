# GetWorkflowSummaryResponse


## Supported Types

### `operations.GetWorkflowSummaryResponseBody`

```typescript
const value: operations.GetWorkflowSummaryResponseBody = {
  metrics: {
    completedRuns: 103990,
    durationMetrics: {
      max: 633982,
      mean: 751033,
      median: 155978,
      min: 426002,
      p95: 892708,
      standardDeviation: 1035.78,
    },
    failedRuns: 18096,
    mttr: 590585,
    successRate: 4355.32,
    successfulRuns: 798690,
    throughput: 9234.56,
    totalCreditsUsed: 299153,
    totalRuns: 388404,
    windowEnd: new Date("2023-06-17T22:54:03.452Z"),
    windowStart: new Date("2023-10-07T14:44:09.655Z"),
  },
  trends: {
    failedRuns: 9838.54,
    medianDurationSecs: 6973.30,
    mttr: 3895.49,
    p95DurationSecs: 2637.68,
    successRate: 9446.26,
    throughput: 1355.48,
    totalCreditsUsed: 7202.66,
    totalRuns: 9253.95,
  },
  workflowNames: [
    "<value>",
  ],
};
```

### `operations.GetWorkflowSummaryInsightsResponseBody`

```typescript
const value: operations.GetWorkflowSummaryInsightsResponseBody = {};
```

