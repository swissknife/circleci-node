# GetProjectWorkflowMetricsItems

## Example Usage

```typescript
import { GetProjectWorkflowMetricsItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowMetricsItems = {
  metrics: {
    durationMetrics: {
      max: 621666,
      mean: 288570,
      median: 874400,
      min: 112427,
      p95: 212434,
      standardDeviation: 1830.33,
    },
    failedRuns: 403026,
    mttr: 745233,
    successRate: 5269.07,
    successfulRuns: 487676,
    throughput: 5.46,
    totalCreditsUsed: 425402,
    totalRecoveries: 63553,
    totalRuns: 208253,
  },
  name: "build-and-test",
  projectId: "<value>",
  windowEnd: new Date("2024-10-18T21:41:24.614Z"),
  windowStart: new Date("2022-08-25T01:50:03.721Z"),
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