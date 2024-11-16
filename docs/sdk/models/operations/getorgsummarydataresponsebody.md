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
      successRate: 3354.98,
      throughput: 1476.86,
      totalCreditsUsed: 62636,
      totalDurationSecs: 241901,
      totalRuns: 432281,
    },
    trends: {
      successRate: 5219.96,
      throughput: 7730.84,
      totalCreditsUsed: 9587.41,
      totalDurationSecs: 1173.20,
      totalRuns: 1070.04,
    },
  },
  orgProjectData: [
    {
      metrics: {
        successRate: 5896.95,
        totalCreditsUsed: 745398,
        totalDurationSecs: 848151,
        totalRuns: 935833,
      },
      projectName: "api-preview-docs",
      trends: {
        successRate: 9834.26,
        totalCreditsUsed: 3998.02,
        totalDurationSecs: 3803.35,
        totalRuns: 1478.09,
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