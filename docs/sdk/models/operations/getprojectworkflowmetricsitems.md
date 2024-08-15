# GetProjectWorkflowMetricsItems

## Example Usage

```typescript
import { GetProjectWorkflowMetricsItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowMetricsItems = {
    metrics: {
        durationMetrics: {
            max: 92027,
            mean: 454162,
            median: 55965,
            min: 326701,
            p95: 86532,
            standardDeviation: 2327.44,
        },
        failedRuns: 237173,
        mttr: 614465,
        successRate: 8395.13,
        successfulRuns: 33074,
        throughput: 5223.71,
        totalCreditsUsed: 15606,
        totalRecoveries: 513075,
        totalRuns: 428796,
    },
    name: "build-and-test",
    projectId: "<value>",
    windowEnd: new Date("2023-12-14T05:10:48.896Z"),
    windowStart: new Date("2022-03-16T14:37:13.801Z"),
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