# GetProjectWorkflowJobMetricsItems

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsItems = {
  metrics: {
    durationMetrics: {
      max: 44612,
      mean: 715179,
      median: 799796,
      min: 490819,
      p95: 76956,
      standardDeviation: 4694.98,
    },
    failedRuns: 518835,
    successRate: 8827.1,
    successfulRuns: 306810,
    throughput: 4884.1,
    totalCreditsUsed: 577543,
    totalRuns: 414567,
  },
  name: "<value>",
  windowEnd: new Date("2024-11-17T12:56:04.847Z"),
  windowStart: new Date("2022-07-10T19:50:26.525Z"),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                               | [operations.GetProjectWorkflowJobMetricsMetrics](../../../sdk/models/operations/getprojectworkflowjobmetricsmetrics.md) | :heavy_check_mark:                                                                                                      | Metrics relating to a workflow job's runs.                                                                              |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The name of the job.                                                                                                    |
| `windowEnd`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The timestamp of the last build within the requested reporting window.                                                  |
| `windowStart`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The timestamp of the first build within the requested reporting window.                                                 |