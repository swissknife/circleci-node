# GetJobTimeseriesItems

## Example Usage

```typescript
import { GetJobTimeseriesItems } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesItems = {
  maxEndedAt: new Date("2022-01-15T12:10:56.211Z"),
  metrics: {
    durationMetrics: {
      max: 974259,
      median: 347233,
      min: 862310,
      p95: 148141,
      total: 780427,
    },
    failedRuns: 981830,
    medianCreditsUsed: 985033,
    successfulRuns: 478370,
    throughput: 7535.7,
    totalCreditsUsed: 497391,
    totalRuns: 4048,
  },
  minStartedAt: new Date("2023-12-02T20:41:06.265Z"),
  name: "build-and-test",
  timestamp: new Date("2022-10-23T08:23:13.536Z"),
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