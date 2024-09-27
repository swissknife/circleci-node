# GetProjectWorkflowJobMetricsItems

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsItems = {
  metrics: {
    durationMetrics: {
      max: 507636,
      mean: 300403,
      median: 549501,
      min: 930819,
      p95: 520761,
      standardDeviation: 2672.07,
    },
    failedRuns: 877399,
    successRate: 3719.19,
    successfulRuns: 1383,
    throughput: 2476.85,
    totalCreditsUsed: 318233,
    totalRuns: 858778,
  },
  name: "<value>",
  windowEnd: new Date("2023-05-18T12:28:02.303Z"),
  windowStart: new Date("2023-05-03T06:25:26.467Z"),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                               | [operations.GetProjectWorkflowJobMetricsMetrics](../../../sdk/models/operations/getprojectworkflowjobmetricsmetrics.md) | :heavy_check_mark:                                                                                                      | Metrics relating to a workflow job's runs.                                                                              |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The name of the job.                                                                                                    |
| `windowEnd`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The timestamp of the last build within the requested reporting window.                                                  |
| `windowStart`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The timestamp of the first build within the requested reporting window.                                                 |