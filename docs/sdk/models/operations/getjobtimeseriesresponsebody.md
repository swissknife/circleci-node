# GetJobTimeseriesResponseBody

Project level timeseries metrics response

## Example Usage

```typescript
import { GetJobTimeseriesResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesResponseBody = {
    items: [
        {
            maxEndedAt: new Date("2022-03-02T16:33:57.711Z"),
            metrics: {
                durationMetrics: {
                    max: 476477,
                    median: 301598,
                    min: 487935,
                    p95: 262118,
                    total: 458515,
                },
                failedRuns: 456141,
                medianCreditsUsed: 524593,
                successfulRuns: 683282,
                throughput: 4420.15,
                totalCreditsUsed: 695626,
                totalRuns: 852635,
            },
            minStartedAt: new Date("2022-11-07T17:40:47.245Z"),
            name: "build-and-test",
            timestamp: new Date("2023-04-21T01:10:43.797Z"),
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