# GetJobTimeseriesResponseBody

Project level timeseries metrics response

## Example Usage

```typescript
import { GetJobTimeseriesResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesResponseBody = {
  items: [
    {
      maxEndedAt: new Date("2023-02-08T23:14:57.837Z"),
      metrics: {
        durationMetrics: {
          max: 410492,
          median: 136900,
          min: 428224,
          p95: 822118,
          total: 297842,
        },
        failedRuns: 189848,
        medianCreditsUsed: 401132,
        successfulRuns: 511319,
        throughput: 1206.57,
        totalCreditsUsed: 224317,
        totalRuns: 980700,
      },
      minStartedAt: new Date("2022-04-18T05:42:04.906Z"),
      name: "build-and-test",
      timestamp: new Date("2023-03-22T02:35:35.890Z"),
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