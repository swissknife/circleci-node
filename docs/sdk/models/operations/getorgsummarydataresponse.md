# GetOrgSummaryDataResponse


## Supported Types

### `operations.GetOrgSummaryDataResponseBody`

```typescript
const value: operations.GetOrgSummaryDataResponseBody = {
  allProjects: [
    "<value>",
  ],
  orgData: {
    metrics: {
      successRate: 6849.35,
      throughput: 6567.62,
      totalCreditsUsed: 862063,
      totalDurationSecs: 97258,
      totalRuns: 497777,
    },
    trends: {
      successRate: 5810.82,
      throughput: 2415.57,
      totalCreditsUsed: 1690.25,
      totalDurationSecs: 8595.81,
      totalRuns: 585.34,
    },
  },
  orgProjectData: [
    {
      metrics: {
        successRate: 4706.21,
        totalCreditsUsed: 115834,
        totalDurationSecs: 457059,
        totalRuns: 979963,
      },
      projectName: "api-preview-docs",
      trends: {
        successRate: 4237.06,
        totalCreditsUsed: 8571.25,
        totalDurationSecs: 1173.15,
        totalRuns: 2712.52,
      },
    },
  ],
};
```

### `operations.GetOrgSummaryDataInsightsResponseBody`

```typescript
const value: operations.GetOrgSummaryDataInsightsResponseBody = {};
```

