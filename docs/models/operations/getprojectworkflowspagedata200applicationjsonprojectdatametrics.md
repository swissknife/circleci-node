# GetProjectWorkflowsPageData200ApplicationJSONProjectDataMetrics

Metrics aggregated across all workflows and branches for a project.


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `successRate`                                                    | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `throughput`                                                     | *number*                                                         | :heavy_check_mark:                                               | The average number of runs per day.                              |
| `totalCreditsUsed`                                               | *number*                                                         | :heavy_check_mark:                                               | The total credits consumed over the current timeseries interval. |
| `totalDurationSecs`                                              | *number*                                                         | :heavy_check_mark:                                               | Total duration, in seconds.                                      |
| `totalRuns`                                                      | *number*                                                         | :heavy_check_mark:                                               | The total number of runs.                                        |