# GetProjectWorkflowJobMetricsItems

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsItems = {
  metrics: {
    durationMetrics: {
      max: 432984,
      mean: 528234,
      median: 349440,
      min: 781480,
      p95: 751022,
      standardDeviation: 9272.12,
    },
    failedRuns: 28952,
    successRate: 8956.91,
    successfulRuns: 392569,
    throughput: 8783.72,
    totalCreditsUsed: 690785,
    totalRuns: 987349,
  },
  name: "<value>",
  windowEnd: new Date("2024-04-12T04:09:56.196Z"),
  windowStart: new Date("2023-02-04T12:58:54.632Z"),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                               | [operations.GetProjectWorkflowJobMetricsMetrics](../../../sdk/models/operations/getprojectworkflowjobmetricsmetrics.md) | :heavy_check_mark:                                                                                                      | Metrics relating to a workflow job's runs.                                                                              |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The name of the job.                                                                                                    |
| `windowEnd`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The timestamp of the last build within the requested reporting window.                                                  |
| `windowStart`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The timestamp of the first build within the requested reporting window.                                                 |