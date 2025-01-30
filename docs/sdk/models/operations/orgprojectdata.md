# OrgProjectData

## Example Usage

```typescript
import { OrgProjectData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgProjectData = {
  metrics: {
    successRate: 3518.93,
    totalCreditsUsed: 721407,
    totalDurationSecs: 637583,
    totalRuns: 813054,
  },
  projectName: "api-preview-docs",
  trends: {
    successRate: 9762.26,
    totalCreditsUsed: 8897.94,
    totalDurationSecs: 7645.62,
    totalRuns: 6982.49,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                         | [operations.GetOrgSummaryDataMetrics](../../../sdk/models/operations/getorgsummarydatametrics.md) | :heavy_check_mark:                                                                                | Metrics for a single project, across all branches.                                                |                                                                                                   |
| `projectName`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The name of the project.                                                                          | api-preview-docs                                                                                  |
| `trends`                                                                                          | [operations.GetOrgSummaryDataTrends](../../../sdk/models/operations/getorgsummarydatatrends.md)   | :heavy_check_mark:                                                                                | Trends for a single project, across all branches.                                                 |                                                                                                   |