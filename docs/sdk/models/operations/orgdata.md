# OrgData

Aggregated metrics for an org, with trends.

## Example Usage

```typescript
import { OrgData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgData = {
    metrics: {
        successRate: 3994.99,
        throughput: 811.01,
        totalCreditsUsed: 301831,
        totalDurationSecs: 407241,
        totalRuns: 775220,
    },
    trends: {
        successRate: 2322.34,
        throughput: 9262.13,
        totalCreditsUsed: 1324.87,
        totalDurationSecs: 3253.1,
        totalRuns: 534.27,
    },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                       | [operations.GetOrgSummaryDataMetrics](../../../sdk/models/operations/getorgsummarydatametrics.md)               | :heavy_check_mark:                                                                                              | Metrics for a single org metrics.                                                                               |
| `trends`                                                                                                        | [operations.GetOrgSummaryDataInsightsTrends](../../../sdk/models/operations/getorgsummarydatainsightstrends.md) | :heavy_check_mark:                                                                                              | Trends for a single org.                                                                                        |