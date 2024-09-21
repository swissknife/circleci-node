# GetProjectWorkflowMetricsResponse

## Example Usage

```typescript
import { GetProjectWorkflowMetricsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowMetricsResponse = {
  items: [
    {
      metrics: {
        durationMetrics: {
          max: 250398,
          mean: 483394,
          median: 39992,
          min: 639705,
          p95: 408303,
          standardDeviation: 3774.07,
        },
        failedRuns: 809365,
        mttr: 709036,
        successRate: 9543.34,
        successfulRuns: 351936,
        throughput: 8975.43,
        totalCreditsUsed: 769967,
        totalRecoveries: 357425,
        totalRuns: 621666,
      },
      name: "build-and-test",
      projectId: "<value>",
      windowEnd: new Date("2022-11-13T06:32:38.998Z"),
      windowStart: new Date("2024-08-16T08:12:55.508Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `operations.GetProjectWorkflowMetricsResponseBody`

```typescript
const value: operations.GetProjectWorkflowMetricsResponseBody = /* values here */
```

### `operations.GetProjectWorkflowMetricsInsightsResponseBody`

```typescript
const value: operations.GetProjectWorkflowMetricsInsightsResponseBody = /* values here */
```

