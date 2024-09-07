# GetProjectWorkflowJobMetricsDurationMetrics

Metrics relating to the duration of runs for a workflow job.

## Example Usage

```typescript
import { GetProjectWorkflowJobMetricsDurationMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowJobMetricsDurationMetrics = {
    max: 778696,
    mean: 847276,
    median: 777408,
    min: 681359,
    p95: 259422,
    standardDeviation: 1783.67,
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