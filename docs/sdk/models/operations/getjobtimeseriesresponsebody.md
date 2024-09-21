# GetJobTimeseriesResponseBody

Project level timeseries metrics response

## Example Usage

```typescript
import { GetJobTimeseriesResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesResponseBody = {
  items: [
    {
      maxEndedAt: new Date("2023-05-16T08:17:57.191Z"),
      metrics: {
        durationMetrics: {
          max: 337477,
          median: 970494,
          min: 133439,
          p95: 96804,
          total: 343392,
        },
        failedRuns: 591027,
        medianCreditsUsed: 659177,
        successfulRuns: 397257,
        throughput: 9992.78,
        totalCreditsUsed: 351893,
        totalRuns: 721407,
      },
      minStartedAt: new Date("2023-11-30T18:58:30.709Z"),
      name: "build-and-test",
      timestamp: new Date("2024-06-10T02:34:07.748Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `items`                                                                                       | [operations.GetJobTimeseriesItems](../../../sdk/models/operations/getjobtimeseriesitems.md)[] | :heavy_check_mark:                                                                            | Aggregate metrics for a workflow at a time granularity                                        |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | A token to pass as a `page-token` query parameter to return the next page of results.         |