# GetWorkflowSummaryResponseBody

Workflow level aggregated metrics and trends response

## Example Usage

```typescript
import { GetWorkflowSummaryResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowSummaryResponseBody = {
  metrics: {
    completedRuns: 638390,
    durationMetrics: {
      max: 280859,
      mean: 947822,
      median: 728559,
      min: 329651,
      p95: 791762,
      standardDeviation: 1081.66,
    },
    failedRuns: 392319,
    mttr: 221218,
    successRate: 6837.26,
    successfulRuns: 102446,
    throughput: 3970.26,
    totalCreditsUsed: 276650,
    totalRuns: 506343,
    windowEnd: new Date("2023-01-19T11:42:30.917Z"),
    windowStart: new Date("2024-02-14T05:25:25.806Z"),
  },
  trends: {
    failedRuns: 245.77,
    medianDurationSecs: 6339.87,
    mttr: 2305.71,
    p95DurationSecs: 2687.09,
    successRate: 8002.56,
    throughput: 9555.68,
    totalCreditsUsed: 3165.50,
    totalRuns: 8268.05,
  },
  workflowNames: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `metrics`                                                                | [operations.Metrics](../../../sdk/models/operations/metrics.md)          | :heavy_check_mark:                                                       | Metrics aggregated across a workflow for a given time window.            |
| `trends`                                                                 | [operations.Trends](../../../sdk/models/operations/trends.md)            | :heavy_check_mark:                                                       | Trends for aggregated metrics across a workflow for a given time window. |
| `workflowNames`                                                          | *string*[]                                                               | :heavy_check_mark:                                                       | A list of all the workflow names for a given project.                    |