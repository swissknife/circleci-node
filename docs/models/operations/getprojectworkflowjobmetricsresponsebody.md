# GetProjectWorkflowJobMetricsResponseBody

Paginated workflow job summary metrics.


## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                        | [operations.GetProjectWorkflowJobMetricsItems](../../models/operations/getprojectworkflowjobmetricsitems.md)[] | :heavy_check_mark:                                                                                             | Job summary metrics.                                                                                           |
| `nextPageToken`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | A token to pass as a `page-token` query parameter to return the next page of results.                          |