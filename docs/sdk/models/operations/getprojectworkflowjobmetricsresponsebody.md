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
          max: 336102,
          mean: 880679,
          median: 945027,
          min: 991891,
          p95: 376741,
          standardDeviation: 9661.47,
        },
        failedRuns: 791880,
        successRate: 6756.89,
        successfulRuns: 244889,
        throughput: 2164.57,
        totalCreditsUsed: 166047,
        totalRuns: 922757,
      },
      name: "<value>",
      windowEnd: new Date("2022-11-19T07:23:33.098Z"),
      windowStart: new Date("2023-05-12T14:11:27.716Z"),
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