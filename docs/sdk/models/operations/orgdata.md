# OrgData

Aggregated metrics for an org, with trends.

## Example Usage

```typescript
import { OrgData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgData = {
  metrics: {
    successRate: 6391.87,
    throughput: 3991.61,
    totalCreditsUsed: 431760,
    totalDurationSecs: 614528,
    totalRuns: 70042,
  },
  trends: {
    successRate: 8224.07,
    throughput: 6534.21,
    totalCreditsUsed: 7263.42,
    totalDurationSecs: 5369.23,
    totalRuns: 1104.77,
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                       | [operations.GetOrgSummaryDataMetrics](../../../sdk/models/operations/getorgsummarydatametrics.md)               | :heavy_check_mark:                                                                                              | Metrics for a single org metrics.                                                                               |
| `trends`                                                                                                        | [operations.GetOrgSummaryDataInsightsTrends](../../../sdk/models/operations/getorgsummarydatainsightstrends.md) | :heavy_check_mark:                                                                                              | Trends for a single org.                                                                                        |