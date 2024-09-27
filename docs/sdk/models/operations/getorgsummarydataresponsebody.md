# GetOrgSummaryDataResponseBody

Summary metrics with trends for the entire org, and for each project.

## Example Usage

```typescript
import { GetOrgSummaryDataResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataResponseBody = {
  allProjects: [
    "<value>",
  ],
  orgData: {
    metrics: {
      successRate: 3651.00,
      throughput: 1905.67,
      totalCreditsUsed: 19122,
      totalDurationSecs: 518150,
      totalRuns: 842777,
    },
    trends: {
      successRate: 3732.16,
      throughput: 2228.64,
      totalCreditsUsed: 805.32,
      totalDurationSecs: 853.11,
      totalRuns: 2213.96,
    },
  },
  orgProjectData: [
    {
      metrics: {
        successRate: 1000.14,
        totalCreditsUsed: 265039,
        totalDurationSecs: 66149,
        totalRuns: 65604,
      },
      projectName: "api-preview-docs",
      trends: {
        successRate: 8562.76,
        totalCreditsUsed: 1621.20,
        totalDurationSecs: 5596.82,
        totalRuns: 7734.56,
      },
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `allProjects`                                                                   | *string*[]                                                                      | :heavy_check_mark:                                                              | A list of all the project names in the organization.                            |
| `orgData`                                                                       | [operations.OrgData](../../../sdk/models/operations/orgdata.md)                 | :heavy_check_mark:                                                              | Aggregated metrics for an org, with trends.                                     |
| `orgProjectData`                                                                | [operations.OrgProjectData](../../../sdk/models/operations/orgprojectdata.md)[] | :heavy_check_mark:                                                              | Metrics for a single project, across all branches                               |