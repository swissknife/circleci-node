# GetProjectWorkflowMetricsItems

## Example Usage

```typescript
import { GetProjectWorkflowMetricsItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowMetricsItems = {
  metrics: {
    durationMetrics: {
      max: 766964,
      mean: 160538,
      median: 9766,
      min: 796392,
      p95: 308286,
      standardDeviation: 9591.67,
    },
    failedRuns: 232865,
    mttr: 458139,
    successRate: 5034.27,
    successfulRuns: 590984,
    throughput: 9537.22,
    totalCreditsUsed: 857723,
    totalRecoveries: 557811,
    totalRuns: 457223,
  },
  name: "build-and-test",
  projectId: "<value>",
  windowEnd: new Date("2022-04-17T19:48:58.789Z"),
  windowStart: new Date("2024-11-09T06:06:22.263Z"),
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