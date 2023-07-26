# GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataMetrics

Metrics aggregated across a workflow or branchfor a project.


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `p95DurationSecs`                                                | *number*                                                         | :heavy_check_mark:                                               | The 95th percentile duration among a group of workflow runs.     |
| `successRate`                                                    | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `totalCreditsUsed`                                               | *number*                                                         | :heavy_check_mark:                                               | The total credits consumed over the current timeseries interval. |
| `totalRuns`                                                      | *number*                                                         | :heavy_check_mark:                                               | The total number of runs.                                        |