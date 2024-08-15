# OrgData

Aggregated metrics for an org, with trends.

## Example Usage

```typescript
import { OrgData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgData = {
    metrics: {
        successRate: 7791.92,
        throughput: 4598.56,
        totalCreditsUsed: 925164,
        totalDurationSecs: 44612,
        totalRuns: 715179,
    },
    trends: {
        successRate: 7997.96,
        throughput: 4908.19,
        totalCreditsUsed: 769.56,
        totalDurationSecs: 4694.98,
        totalRuns: 5188.35,
    },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                       | [operations.GetOrgSummaryDataMetrics](../../../sdk/models/operations/getorgsummarydatametrics.md)               | :heavy_check_mark:                                                                                              | Metrics for a single org metrics.                                                                               |
| `trends`                                                                                                        | [operations.GetOrgSummaryDataInsightsTrends](../../../sdk/models/operations/getorgsummarydatainsightstrends.md) | :heavy_check_mark:                                                                                              | Trends for a single org.                                                                                        |