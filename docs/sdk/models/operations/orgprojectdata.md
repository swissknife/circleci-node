# OrgProjectData

## Example Usage

```typescript
import { OrgProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgProjectData = {
  metrics: {
    successRate: 1690.25,
    totalCreditsUsed: 859581,
    totalDurationSecs: 58534,
    totalRuns: 470621,
  },
  projectName: "api-preview-docs",
  trends: {
    successRate: 1158.34,
    totalCreditsUsed: 4570.59,
    totalDurationSecs: 9799.62,
    totalRuns: 4237.06,
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                         | [operations.GetOrgSummaryDataInsightsMetrics](../../../sdk/models/operations/getorgsummarydatainsightsmetrics.md) | :heavy_check_mark:                                                                                                | Metrics for a single project, across all branches.                                                                |                                                                                                                   |
| `projectName`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The name of the project.                                                                                          | api-preview-docs                                                                                                  |
| `trends`                                                                                                          | [operations.GetOrgSummaryDataTrends](../../../sdk/models/operations/getorgsummarydatatrends.md)                   | :heavy_check_mark:                                                                                                | Trends for a single project, across all branches.                                                                 |                                                                                                                   |