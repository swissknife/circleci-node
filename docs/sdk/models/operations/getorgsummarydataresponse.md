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
      successRate: 4561.41,
      throughput: 5245.93,
      totalCreditsUsed: 683282,
      totalDurationSecs: 442015,
      totalRuns: 695626,
    },
    trends: {
      successRate: 8526.35,
      throughput: 2835.19,
      totalCreditsUsed: 4334.39,
      totalDurationSecs: 3799.27,
      totalRuns: 8268.71,
    },
  },
  orgProjectData: [
    {
      metrics: {
        successRate: 1811.51,
        totalCreditsUsed: 509342,
        totalDurationSecs: 788546,
        totalRuns: 86377,
      },
      projectName: "api-preview-docs",
      trends: {
        successRate: 568.48,
        totalCreditsUsed: 6600.4,
        totalDurationSecs: 6969.97,
        totalRuns: 2065.94,
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

