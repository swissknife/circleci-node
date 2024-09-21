# OrgData

Aggregated metrics for an org, with trends.

## Example Usage

```typescript
import { OrgData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgData = {
  metrics: {
    successRate: 9587.41,
    throughput: 1173.20,
    totalCreditsUsed: 107004,
    totalDurationSecs: 589695,
    totalRuns: 745398,
  },
  trends: {
    successRate: 8481.50,
    throughput: 9358.32,
    totalCreditsUsed: 9834.26,
    totalDurationSecs: 3998.02,
    totalRuns: 3803.35,
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                       | [operations.GetOrgSummaryDataMetrics](../../../sdk/models/operations/getorgsummarydatametrics.md)               | :heavy_check_mark:                                                                                              | Metrics for a single org metrics.                                                                               |
| `trends`                                                                                                        | [operations.GetOrgSummaryDataInsightsTrends](../../../sdk/models/operations/getorgsummarydatainsightstrends.md) | :heavy_check_mark:                                                                                              | Trends for a single org.                                                                                        |