# DurationMetrics

Metrics relating to the duration of runs for a workflow.

## Example Usage

```typescript
import { DurationMetrics } from "circleci-v2-sdk/sdk/models/operations";

let value: DurationMetrics = {
  max: 985109,
  mean: 783397,
  median: 518990,
  min: 66074,
  p95: 472414,
  standardDeviation: 4382.56,
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