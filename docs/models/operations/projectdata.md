# ProjectData

Metrics and trends data aggregated for a given project.


## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `metrics`                                                                                                      | [operations.GetProjectWorkflowsPageDataMetrics](../../models/operations/getprojectworkflowspagedatametrics.md) | :heavy_check_mark:                                                                                             | Metrics aggregated across all workflows and branches for a project.                                            |
| `trends`                                                                                                       | [operations.GetProjectWorkflowsPageDataTrends](../../models/operations/getprojectworkflowspagedatatrends.md)   | :heavy_check_mark:                                                                                             | Metric trends aggregated across all workflows and branches for a project.                                      |