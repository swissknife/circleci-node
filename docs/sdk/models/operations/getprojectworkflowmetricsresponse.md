# GetProjectWorkflowMetricsResponse


## Supported Types

### `operations.GetProjectWorkflowMetricsResponseBody`

```typescript
const value: operations.GetProjectWorkflowMetricsResponseBody = {
  items: [
    {
      metrics: {
        durationMetrics: {
          max: 817339,
          mean: 473143,
          median: 882284,
          min: 733289,
          p95: 409726,
          standardDeviation: 3735.11,
        },
        failedRuns: 515638,
        mttr: 889060,
        successRate: 7372.79,
        successfulRuns: 5152,
        throughput: 6941.58,
        totalCreditsUsed: 919508,
        totalRecoveries: 710456,
        totalRuns: 177005,
      },
      name: "build-and-test",
      projectId: "<value>",
      windowEnd: new Date("2023-06-14T22:27:38.966Z"),
      windowStart: new Date("2022-06-03T18:52:21.127Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

### `operations.GetProjectWorkflowMetricsInsightsResponseBody`

```typescript
const value: operations.GetProjectWorkflowMetricsInsightsResponseBody = {};
```

