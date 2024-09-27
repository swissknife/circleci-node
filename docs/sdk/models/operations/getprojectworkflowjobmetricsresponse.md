# GetProjectWorkflowJobMetricsResponse


## Supported Types

### `operations.GetProjectWorkflowJobMetricsResponseBody`

```typescript
const value: operations.GetProjectWorkflowJobMetricsResponseBody = {
  items: [
    {
      metrics: {
        durationMetrics: {
          max: 493958,
          mean: 778172,
          median: 844235,
          min: 139072,
          p95: 426904,
          standardDeviation: 8428.55,
        },
        failedRuns: 818034,
        successRate: 1024.14,
        successfulRuns: 156383,
        throughput: 3041.99,
        totalCreditsUsed: 75359,
        totalRuns: 424663,
      },
      name: "<value>",
      windowEnd: new Date("2022-04-28T22:46:34.018Z"),
      windowStart: new Date("2023-09-15T18:23:44.102Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

### `operations.GetProjectWorkflowJobMetricsInsightsResponseBody`

```typescript
const value: operations.GetProjectWorkflowJobMetricsInsightsResponseBody = {};
```

