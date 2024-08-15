# OrgProjectData

## Example Usage

```typescript
import { OrgProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgProjectData = {
    metrics: {
        successRate: 4752.89,
        totalCreditsUsed: 35362,
        totalDurationSecs: 783648,
        totalRuns: 430402,
    },
    projectName: "api-preview-docs",
    trends: {
        successRate: 5564.29,
        totalCreditsUsed: 5100.17,
        totalDurationSecs: 1598.67,
        totalRuns: 5361.78,
    },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                         | [operations.GetOrgSummaryDataInsightsMetrics](../../../sdk/models/operations/getorgsummarydatainsightsmetrics.md) | :heavy_check_mark:                                                                                                | Metrics for a single project, across all branches.                                                                |                                                                                                                   |
| `projectName`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The name of the project.                                                                                          | api-preview-docs                                                                                                  |
| `trends`                                                                                                          | [operations.GetOrgSummaryDataTrends](../../../sdk/models/operations/getorgsummarydatatrends.md)                   | :heavy_check_mark:                                                                                                | Trends for a single project, across all branches.                                                                 |                                                                                                                   |