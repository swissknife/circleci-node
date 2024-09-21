# GetProjectWorkflowMetricsDurationMetrics

Metrics relating to the duration of runs for a workflow.

## Example Usage

```typescript
import { GetProjectWorkflowMetricsDurationMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowMetricsDurationMetrics = {
  max: 81369,
  mean: 881897,
  median: 719620,
  min: 966390,
  p95: 507636,
  standardDeviation: 3004.04,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | The max duration, in seconds, among a group of runs.             |
| `mean`                                                           | *number*                                                         | :heavy_check_mark:                                               | The mean duration, in seconds, among a group of runs.            |
| `median`                                                         | *number*                                                         | :heavy_check_mark:                                               | The median duration, in seconds, among a group of runs.          |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | The minimum duration, in seconds, among a group of runs.         |
| `p95`                                                            | *number*                                                         | :heavy_check_mark:                                               | The 95th percentile duration, in seconds, among a group of runs. |
| `standardDeviation`                                              | *number*                                                         | :heavy_check_mark:                                               | The standard deviation, in seconds, among a group of runs.       |