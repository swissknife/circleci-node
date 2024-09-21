# GetJobTimeseriesItems

## Example Usage

```typescript
import { GetJobTimeseriesItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesItems = {
  maxEndedAt: new Date("2023-02-01T23:01:15.623Z"),
  metrics: {
    durationMetrics: {
      max: 470649,
      median: 378245,
      min: 979527,
      p95: 174658,
      total: 327988,
    },
    failedRuns: 680349,
    medianCreditsUsed: 63207,
    successfulRuns: 607249,
    throughput: 4776.47,
    totalCreditsUsed: 284000,
    totalRuns: 238413,
  },
  minStartedAt: new Date("2023-07-18T21:44:35.519Z"),
  name: "build-and-test",
  timestamp: new Date("2023-02-08T05:58:01.482Z"),
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