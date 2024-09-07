# OrgProjectData

## Example Usage

```typescript
import { OrgProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgProjectData = {
    metrics: {
        successRate: 8828.6,
        totalCreditsUsed: 79522,
        totalDurationSecs: 250622,
        totalRuns: 89603,
    },
    projectName: "api-preview-docs",
    trends: {
        successRate: 6774.12,
        totalCreditsUsed: 6720.48,
        totalDurationSecs: 8104.24,
        totalRuns: 2453.67,
    },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                         | [operations.GetOrgSummaryDataInsightsMetrics](../../../sdk/models/operations/getorgsummarydatainsightsmetrics.md) | :heavy_check_mark:                                                                                                | Metrics for a single project, across all branches.                                                                |                                                                                                                   |
| `projectName`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The name of the project.                                                                                          | api-preview-docs                                                                                                  |
| `trends`                                                                                                          | [operations.GetOrgSummaryDataTrends](../../../sdk/models/operations/getorgsummarydatatrends.md)                   | :heavy_check_mark:                                                                                                | Trends for a single project, across all branches.                                                                 |                                                                                                                   |