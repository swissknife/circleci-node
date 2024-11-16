# OrgData

Aggregated metrics for an org, with trends.

## Example Usage

```typescript
import { OrgData } from "circleci-v2-sdk/sdk/models/operations";

let value: OrgData = {
  metrics: {
    successRate: 6803.49,
    throughput: 632.08,
    totalCreditsUsed: 607249,
    totalDurationSecs: 477646,
    totalRuns: 284000,
  },
  trends: {
    successRate: 2384.13,
    throughput: 5145.13,
    totalCreditsUsed: 3679.28,
    totalDurationSecs: 4565.20,
    totalRuns: 3374.77,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `metrics`                                                       | [operations.Metrics](../../../sdk/models/operations/metrics.md) | :heavy_check_mark:                                              | Metrics for a single org metrics.                               |
| `trends`                                                        | [operations.Trends](../../../sdk/models/operations/trends.md)   | :heavy_check_mark:                                              | Trends for a single org.                                        |