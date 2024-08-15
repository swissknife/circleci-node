# GetJobTimeseriesResponse

## Example Usage

```typescript
import { GetJobTimeseriesResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobTimeseriesResponse = {
    items: [
        {
            maxEndedAt: new Date("2024-06-25T05:59:53.341Z"),
            metrics: {
                durationMetrics: {
                    max: 181151,
                    median: 509342,
                    min: 788546,
                    p95: 86377,
                    total: 56848,
                },
                failedRuns: 660040,
                medianCreditsUsed: 696997,
                successfulRuns: 206594,
                throughput: 7786.96,
                totalCreditsUsed: 847276,
                totalRuns: 777408,
            },
            minStartedAt: new Date("2024-01-17T18:28:14.327Z"),
            name: "build-and-test",
            timestamp: new Date("2022-10-12T07:51:04.194Z"),
        },
    ],
    nextPageToken: "<value>",
};
```

## Supported Types

### `operations.GetJobTimeseriesResponseBody`

```typescript
const value: operations.GetJobTimeseriesResponseBody = /* values here */
```

### `operations.GetJobTimeseriesInsightsResponseBody`

```typescript
const value: operations.GetJobTimeseriesInsightsResponseBody = /* values here */
```

