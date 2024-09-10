# GetProjectWorkflowJobMetricsResponse

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsResponse = {
  items: [
    {
      metrics: {
        durationMetrics: {
          max: 325685,
          mean: 392676,
          median: 147014,
          min: 956406,
          p95: 159870,
          standardDeviation: 1871.31,
        },
        failedRuns: 129412,
        successRate: 9039.84,
        successfulRuns: 578922,
        throughput: 5438.06,
        totalCreditsUsed: 92260,
        totalRuns: 456911,
      },
      name: "<value>",
      windowEnd: new Date("2024-09-24T22:58:05.825Z"),
      windowStart: new Date("2024-08-24T17:13:02.566Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `operations.GetProjectWorkflowJobMetricsResponseBody`

```typescript
const value: operations.GetProjectWorkflowJobMetricsResponseBody = /* values here */
```

### `operations.GetProjectWorkflowJobMetricsInsightsResponseBody`

```typescript
const value: operations.GetProjectWorkflowJobMetricsInsightsResponseBody = /* values here */
```

