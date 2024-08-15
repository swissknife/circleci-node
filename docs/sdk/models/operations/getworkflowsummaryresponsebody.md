# GetWorkflowSummaryResponseBody

Workflow level aggregated metrics and trends response

## Example Usage

```typescript
import { GetWorkflowSummaryResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowSummaryResponseBody = {
    metrics: {
        completedRuns: 968865,
        durationMetrics: {
            max: 209750,
            mean: 690894,
            median: 115703,
            min: 99416,
            p95: 577140,
            standardDeviation: 2897.76,
        },
        failedRuns: 695270,
        mttr: 539074,
        successRate: 6719.57,
        successfulRuns: 724148,
        throughput: 9488.61,
        totalCreditsUsed: 388867,
        totalRuns: 2703,
        windowEnd: new Date("2022-09-06T21:13:00.386Z"),
        windowStart: new Date("2023-12-11T07:51:38.634Z"),
    },
    trends: {
        failedRuns: 4548.6,
        medianDurationSecs: 6003.92,
        mttr: 9720.83,
        p95DurationSecs: 5887.4,
        successRate: 8338.19,
        throughput: 9627.71,
        totalCreditsUsed: 9147.91,
        totalRuns: 168.71,
    },
    workflowNames: ["<value>"],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `metrics`                                                                | [operations.Metrics](../../../sdk/models/operations/metrics.md)          | :heavy_check_mark:                                                       | Metrics aggregated across a workflow for a given time window.            |
| `trends`                                                                 | [operations.Trends](../../../sdk/models/operations/trends.md)            | :heavy_check_mark:                                                       | Trends for aggregated metrics across a workflow for a given time window. |
| `workflowNames`                                                          | *string*[]                                                               | :heavy_check_mark:                                                       | A list of all the workflow names for a given project.                    |