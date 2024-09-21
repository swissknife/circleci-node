# GetProjectWorkflowMetricsItems

## Example Usage

```typescript
import { GetProjectWorkflowMetricsItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowMetricsItems = {
  metrics: {
    durationMetrics: {
      max: 945027,
      mean: 991891,
      median: 376741,
      min: 966148,
      p95: 791880,
      standardDeviation: 6756.89,
    },
    failedRuns: 244889,
    mttr: 216457,
    successRate: 1660.48,
    successfulRuns: 922757,
    throughput: 2940.77,
    totalCreditsUsed: 453094,
    totalRecoveries: 493958,
    totalRuns: 778172,
  },
  name: "build-and-test",
  projectId: "<value>",
  windowEnd: new Date("2024-07-14T06:45:23.144Z"),
  windowStart: new Date("2022-06-02T10:10:05.991Z"),
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                         | [operations.GetProjectWorkflowMetricsMetrics](../../../sdk/models/operations/getprojectworkflowmetricsmetrics.md) | :heavy_check_mark:                                                                                                | Metrics relating to a workflow's runs.                                                                            |                                                                                                                   |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The name of the workflow.                                                                                         | build-and-test                                                                                                    |
| `projectId`                                                                                                       | *any*                                                                                                             | :heavy_check_mark:                                                                                                | The unique ID of the project                                                                                      |                                                                                                                   |
| `windowEnd`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | The timestamp of the last build within the requested reporting window.                                            |                                                                                                                   |
| `windowStart`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | The timestamp of the first build within the requested reporting window.                                           |                                                                                                                   |