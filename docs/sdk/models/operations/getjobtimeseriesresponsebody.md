# GetJobTimeseriesResponseBody

Project level timeseries metrics response

## Example Usage

```typescript
import { GetJobTimeseriesResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesResponseBody = {
  items: [
    {
      maxEndedAt: new Date("2022-09-23T02:58:56.738Z"),
      metrics: {
        durationMetrics: {
          max: 432281,
          median: 521996,
          min: 773084,
          p95: 958741,
          total: 117320,
        },
        failedRuns: 107004,
        medianCreditsUsed: 589695,
        successfulRuns: 745398,
        throughput: 8481.50,
        totalCreditsUsed: 935833,
        totalRuns: 983427,
      },
      minStartedAt: new Date("2023-03-15T04:23:01.364Z"),
      name: "build-and-test",
      timestamp: new Date("2023-02-21T20:20:12.003Z"),
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