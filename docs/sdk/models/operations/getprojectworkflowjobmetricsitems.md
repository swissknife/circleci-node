# GetProjectWorkflowJobMetricsItems

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsItems = {
    metrics: {
        durationMetrics: {
            max: 636061,
            mean: 731398,
            median: 240020,
            min: 766964,
            p95: 160538,
            standardDeviation: 97.66,
        },
        failedRuns: 796392,
        successRate: 3082.86,
        successfulRuns: 959167,
        throughput: 2328.65,
        totalCreditsUsed: 458139,
        totalRuns: 503427,
    },
    name: "<value>",
    windowEnd: new Date("2023-10-10T17:14:50.735Z"),
    windowStart: new Date("2024-11-11T06:41:13.966Z"),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                               | [operations.GetProjectWorkflowJobMetricsMetrics](../../../sdk/models/operations/getprojectworkflowjobmetricsmetrics.md) | :heavy_check_mark:                                                                                                      | Metrics relating to a workflow job's runs.                                                                              |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The name of the job.                                                                                                    |
| `windowEnd`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The timestamp of the last build within the requested reporting window.                                                  |
| `windowStart`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The timestamp of the first build within the requested reporting window.                                                 |