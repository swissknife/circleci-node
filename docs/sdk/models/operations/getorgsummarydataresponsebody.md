# GetOrgSummaryDataResponseBody

Summary metrics with trends for the entire org, and for each project.

## Example Usage

```typescript
import { GetOrgSummaryDataResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetOrgSummaryDataResponseBody = {
    allProjects: ["<value>"],
    orgData: {
        metrics: {
            successRate: 1438.29,
            throughput: 6813.93,
            totalCreditsUsed: 649463,
            totalDurationSecs: 277596,
            totalRuns: 539224,
        },
        trends: {
            successRate: 1288.6,
            throughput: 3256.85,
            totalCreditsUsed: 3926.76,
            totalDurationSecs: 1470.14,
            totalRuns: 9564.06,
        },
    },
    orgProjectData: [
        {
            metrics: {
                successRate: 1598.7,
                totalCreditsUsed: 187131,
                totalDurationSecs: 129412,
                totalRuns: 903984,
            },
            projectName: "api-preview-docs",
            trends: {
                successRate: 5789.22,
                totalCreditsUsed: 5438.06,
                totalDurationSecs: 922.6,
                totalRuns: 4569.11,
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