# GetJobTimeseriesItems

## Example Usage

```typescript
import { GetJobTimeseriesItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesItems = {
    maxEndedAt: new Date("2022-09-26T22:08:20.985Z"),
    metrics: {
        durationMetrics: {
            max: 432148,
            median: 420539,
            min: 752135,
            p95: 557369,
            total: 829603,
        },
        failedRuns: 860552,
        medianCreditsUsed: 379034,
        successfulRuns: 727044,
        throughput: 965.49,
        totalCreditsUsed: 270328,
        totalRuns: 256139,
    },
    minStartedAt: new Date("2022-05-25T02:31:24.459Z"),
    name: "build-and-test",
    timestamp: new Date("2023-10-11T18:15:45.178Z"),
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `maxEndedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | The end time of the last execution included in the metrics.                                     |                                                                                                 |
| `metrics`                                                                                       | [operations.GetJobTimeseriesMetrics](../../../sdk/models/operations/getjobtimeseriesmetrics.md) | :heavy_check_mark:                                                                              | Metrics relating to a workflow's runs.                                                          |                                                                                                 |
| `minStartedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | The start time for the earliest execution included in the metrics.                              |                                                                                                 |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | The name of the workflow.                                                                       | build-and-test                                                                                  |
| `timestamp`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | The start of the interval for timeseries metrics.                                               |                                                                                                 |