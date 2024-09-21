# GetWorkflowSummaryResponseBody

Workflow level aggregated metrics and trends response

## Example Usage

```typescript
import { GetWorkflowSummaryResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowSummaryResponseBody = {
  metrics: {
    completedRuns: 525809,
    durationMetrics: {
      max: 141817,
      mean: 316730,
      median: 626707,
      min: 727544,
      p95: 24272,
      standardDeviation: 4301.16,
    },
    failedRuns: 652125,
    mttr: 853246,
    successRate: 4753.25,
    successfulRuns: 969206,
    throughput: 2656.33,
    totalCreditsUsed: 13508,
    totalRuns: 483753,
    windowEnd: new Date("2022-10-08T16:49:02.151Z"),
    windowStart: new Date("2024-06-21T19:04:10.722Z"),
  },
  trends: {
    failedRuns: 2327.73,
    medianDurationSecs: 3106.29,
    mttr: 7912.27,
    p95DurationSecs: 7151.43,
    successRate: 5580.51,
    throughput: 7049.48,
    totalCreditsUsed: 4186.37,
    totalRuns: 53.10,
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