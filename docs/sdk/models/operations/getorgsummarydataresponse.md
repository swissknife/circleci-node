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
      successRate: 4564.10,
      throughput: 1533.69,
      totalCreditsUsed: 199596,
      totalDurationSecs: 432984,
      totalRuns: 528234,
    },
    trends: {
      successRate: 3494.40,
      throughput: 7814.80,
      totalCreditsUsed: 7510.22,
      totalDurationSecs: 9272.12,
      totalRuns: 289.53,
    },
  },
  orgProjectData: [
    {
      metrics: {
        successRate: 8956.91,
        totalCreditsUsed: 392569,
        totalDurationSecs: 878373,
        totalRuns: 690785,
      },
      projectName: "api-preview-docs",
      trends: {
        successRate: 9873.49,
        totalCreditsUsed: 7592.82,
        totalDurationSecs: 3645.45,
        totalRuns: 5010.63,
      },
    },
  ],
};
```

### `operations.GetOrgSummaryDataInsightsResponseBody`

```typescript
const value: operations.GetOrgSummaryDataInsightsResponseBody = {};
```

