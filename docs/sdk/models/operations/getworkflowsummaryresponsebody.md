# GetWorkflowSummaryResponseBody

Workflow level aggregated metrics and trends response

## Example Usage

```typescript
import { GetWorkflowSummaryResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowSummaryResponseBody = {
  metrics: {
    completedRuns: 856303,
    durationMetrics: {
      max: 30235,
      mean: 635057,
      median: 710337,
      min: 299643,
      p95: 7884,
      standardDeviation: 4602.2,
    },
    failedRuns: 372679,
    mttr: 24527,
    successRate: 5305.37,
    successfulRuns: 558065,
    throughput: 9221.12,
    totalCreditsUsed: 361151,
    totalRuns: 89494,
    windowEnd: new Date("2023-07-05T23:16:18.690Z"),
    windowStart: new Date("2023-03-21T21:54:24.703Z"),
  },
  trends: {
    failedRuns: 1536.27,
    medianDurationSecs: 243.13,
    mttr: 4255.08,
    p95DurationSecs: 3426.11,
    successRate: 9061.72,
    throughput: 6222.31,
    totalCreditsUsed: 85.11,
    totalRuns: 2790.68,
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