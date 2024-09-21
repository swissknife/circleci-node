# GetOrgSummaryDataResponse

## Example Usage

```typescript
import { GetOrgSummaryDataResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataResponse = {
  allProjects: [
    "<value>",
  ],
  orgData: {
    metrics: {
      successRate: 4053.74,
      throughput: 3210.43,
      totalCreditsUsed: 29950,
      totalDurationSecs: 737254,
      totalRuns: 109784,
    },
    trends: {
      successRate: 6063.08,
      throughput: 7032.17,
      totalCreditsUsed: 6347.86,
      totalDurationSecs: 9591.42,
      totalRuns: 1032.98,
    },
  },
  orgProjectData: [
    {
      metrics: {
        successRate: 8671.67,
        totalCreditsUsed: 29190,
        totalDurationSecs: 534917,
        totalRuns: 404244,
      },
      projectName: "api-preview-docs",
      trends: {
        successRate: 5241.84,
        totalCreditsUsed: 3651.00,
        totalDurationSecs: 1905.67,
        totalRuns: 191.23,
      },
    },
  ],
};
```

## Supported Types

### `operations.GetOrgSummaryDataResponseBody`

```typescript
const value: operations.GetOrgSummaryDataResponseBody = /* values here */
```

### `operations.GetOrgSummaryDataInsightsResponseBody`

```typescript
const value: operations.GetOrgSummaryDataInsightsResponseBody = /* values here */
```

