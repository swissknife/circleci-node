# GetProjectWorkflowJobMetricsResponseBody

Paginated workflow job summary metrics.

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsResponseBody = {
  items: [
    {
      metrics: {
        durationMetrics: {
          max: 501063,
          mean: 376389,
          median: 364912,
          min: 260904,
          p95: 495970,
          standardDeviation: 6817.40,
        },
        failedRuns: 277340,
        successRate: 5243.80,
        successfulRuns: 117380,
        throughput: 1598.45,
        totalCreditsUsed: 46806,
        totalRuns: 970732,
      },
      name: "<value>",
      windowEnd: new Date("2022-01-05T05:32:33.670Z"),
      windowStart: new Date("2022-07-15T17:22:02.927Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                               | [operations.GetProjectWorkflowJobMetricsItems](../../../sdk/models/operations/getprojectworkflowjobmetricsitems.md)[] | :heavy_check_mark:                                                                                                    | Job summary metrics.                                                                                                  |
| `nextPageToken`                                                                                                       | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | A token to pass as a `page-token` query parameter to return the next page of results.                                 |