# GetProjectWorkflowMetricsResponse

## Example Usage

```typescript
import { GetProjectWorkflowMetricsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowMetricsResponse = {
    items: [
        {
            metrics: {
                durationMetrics: {
                    max: 990345,
                    mean: 45659,
                    median: 409054,
                    min: 310067,
                    p95: 162954,
                    standardDeviation: 8315.2,
                },
                failedRuns: 638762,
                mttr: 807023,
                successRate: 4903.05,
                successfulRuns: 640024,
                throughput: 9894.1,
                totalCreditsUsed: 368102,
                totalRecoveries: 65304,
                totalRuns: 312753,
            },
            name: "build-and-test",
            projectId: "<value>",
            windowEnd: new Date("2024-05-08T10:11:55.203Z"),
            windowStart: new Date("2024-05-28T19:29:53.145Z"),
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

