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
      successRate: 8571.25,
      throughput: 1173.16,
      totalCreditsUsed: 271252,
      totalDurationSecs: 403793,
      totalRuns: 399812,
    },
    trends: {
      successRate: 6713.83,
      throughput: 3447.18,
      totalCreditsUsed: 7137.67,
      totalDurationSecs: 6391.87,
      totalRuns: 3991.61,
    },
  },
  orgProjectData: [
    {
      metrics: {
        successRate: 4317.60,
        totalCreditsUsed: 614528,
        totalDurationSecs: 70042,
        totalRuns: 822407,
      },
      projectName: "api-preview-docs",
      trends: {
        successRate: 6534.21,
        totalCreditsUsed: 7263.42,
        totalDurationSecs: 5369.23,
        totalRuns: 1104.77,
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