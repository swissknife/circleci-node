# GetJobTimeseriesItems

## Example Usage

```typescript
import { GetJobTimeseriesItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesItems = {
  maxEndedAt: new Date("2023-12-24T10:58:40.496Z"),
  metrics: {
    durationMetrics: {
      max: 397257,
      median: 999278,
      min: 351893,
      p95: 721407,
      total: 637583,
    },
    failedRuns: 813054,
    medianCreditsUsed: 976226,
    successfulRuns: 889794,
    throughput: 7645.62,
    totalCreditsUsed: 698249,
    totalRuns: 335498,
  },
  minStartedAt: new Date("2022-06-11T20:43:17.217Z"),
  name: "build-and-test",
  timestamp: new Date("2022-03-10T15:34:38.728Z"),
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