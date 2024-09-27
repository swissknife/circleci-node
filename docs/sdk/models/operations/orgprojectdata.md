# OrgProjectData

## Example Usage

```typescript
import { OrgProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgProjectData = {
  metrics: {
    successRate: 6347.86,
    totalCreditsUsed: 959143,
    totalDurationSecs: 103298,
    totalRuns: 867168,
  },
  projectName: "api-preview-docs",
  trends: {
    successRate: 291.90,
    totalCreditsUsed: 5349.17,
    totalDurationSecs: 4042.44,
    totalRuns: 5241.84,
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                         | [operations.GetOrgSummaryDataInsightsMetrics](../../../sdk/models/operations/getorgsummarydatainsightsmetrics.md) | :heavy_check_mark:                                                                                                | Metrics for a single project, across all branches.                                                                |                                                                                                                   |
| `projectName`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The name of the project.                                                                                          | api-preview-docs                                                                                                  |
| `trends`                                                                                                          | [operations.GetOrgSummaryDataTrends](../../../sdk/models/operations/getorgsummarydatatrends.md)                   | :heavy_check_mark:                                                                                                | Trends for a single project, across all branches.                                                                 |                                                                                                                   |