# GetWorkflowSummaryResponse

## Example Usage

```typescript
import { GetWorkflowSummaryResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowSummaryResponse = {
  metrics: {
    completedRuns: 511222,
    durationMetrics: {
      max: 83291,
      mean: 51075,
      median: 965517,
      min: 859003,
      p95: 152027,
      standardDeviation: 6.64,
    },
    failedRuns: 941668,
    mttr: 278325,
    successRate: 1858.98,
    successfulRuns: 691508,
    throughput: 1089.04,
    totalCreditsUsed: 264649,
    totalRuns: 975095,
    windowEnd: new Date("2023-12-02T20:25:43.751Z"),
    windowStart: new Date("2023-07-25T15:54:31.058Z"),
  },
  trends: {
    failedRuns: 3979.19,
    medianDurationSecs: 7745.01,
    mttr: 1409.57,
    p95DurationSecs: 9673.38,
    successRate: 8611.23,
    throughput: 6176.57,
    totalCreditsUsed: 429.06,
    totalRuns: 7008.56,
  },
  workflowNames: [
    "<value>",
  ],
};
```

## Supported Types

### `operations.GetWorkflowSummaryResponseBody`

```typescript
const value: operations.GetWorkflowSummaryResponseBody = /* values here */
```

### `operations.GetWorkflowSummaryInsightsResponseBody`

```typescript
const value: operations.GetWorkflowSummaryInsightsResponseBody = /* values here */
```

