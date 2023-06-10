# GetJobTimeseries200ApplicationJSONItemsMetricsDurationMetrics

Metrics relating to the duration of runs for a workflow.


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `max`                                                            | *number*                                                         | :heavy_check_mark:                                               | The max duration, in seconds, among a group of runs.             |
| `median`                                                         | *number*                                                         | :heavy_check_mark:                                               | The median duration, in seconds, among a group of runs.          |
| `min`                                                            | *number*                                                         | :heavy_check_mark:                                               | The minimum duration, in seconds, among a group of runs.         |
| `p95`                                                            | *number*                                                         | :heavy_check_mark:                                               | The 95th percentile duration, in seconds, among a group of runs. |
| `total`                                                          | *number*                                                         | :heavy_check_mark:                                               | The total duration, in seconds, added across a group of runs.    |