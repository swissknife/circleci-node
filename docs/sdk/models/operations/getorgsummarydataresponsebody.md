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
      successRate: 4321.48,
      throughput: 4205.39,
      totalCreditsUsed: 752135,
      totalDurationSecs: 557369,
      totalRuns: 829603,
    },
    trends: {
      successRate: 8605.52,
      throughput: 3790.34,
      totalCreditsUsed: 7270.44,
      totalDurationSecs: 965.49,
      totalRuns: 2703.28,
    },
  },
  orgProjectData: [
    {
      metrics: {
        successRate: 2561.39,
        totalCreditsUsed: 131482,
        totalDurationSecs: 591935,
        totalRuns: 55374,
      },
      projectName: "api-preview-docs",
      trends: {
        successRate: 4764.77,
        totalCreditsUsed: 3015.98,
        totalDurationSecs: 4879.35,
        totalRuns: 2621.18,
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