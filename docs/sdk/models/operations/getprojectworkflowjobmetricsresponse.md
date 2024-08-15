# GetProjectWorkflowJobMetricsResponse

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsResponse = {
    items: [
        {
            metrics: {
                durationMetrics: {
                    max: 94458,
                    mean: 628899,
                    median: 633608,
                    min: 398434,
                    p95: 949298,
                    standardDeviation: 627.13,
                },
                failedRuns: 936747,
                successRate: 4240.32,
                successfulRuns: 447378,
                throughput: 2586.84,
                totalCreditsUsed: 727697,
                totalRuns: 849039,
            },
            name: "<value>",
            windowEnd: new Date("2024-03-24T11:49:39.954Z"),
            windowStart: new Date("2022-02-06T12:02:41.609Z"),
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

