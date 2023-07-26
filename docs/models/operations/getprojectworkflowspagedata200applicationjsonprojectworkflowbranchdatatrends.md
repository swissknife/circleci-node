# GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchDataTrends

Trends aggregated across a workflow or branch for a project.


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `p95DurationSecs`                                            | *number*                                                     | :heavy_check_mark:                                           | The 95th percentile duration among a group of workflow runs. |
| `successRate`                                                | *number*                                                     | :heavy_check_mark:                                           | The trend value for the success rate.                        |
| `totalCreditsUsed`                                           | *number*                                                     | :heavy_check_mark:                                           | The trend value for total credits consumed.                  |
| `totalRuns`                                                  | *number*                                                     | :heavy_check_mark:                                           | The trend value for total number of runs.                    |