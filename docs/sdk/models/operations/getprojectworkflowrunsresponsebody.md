# GetProjectWorkflowRunsResponseBody

Paginated recent workflow runs.


## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                   | [operations.GetProjectWorkflowRunsItems](../../../sdk/models/operations/getprojectworkflowrunsitems.md)[] | :heavy_check_mark:                                                                                        | Recent workflow runs.                                                                                     |
| `nextPageToken`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | A token to pass as a `page-token` query parameter to return the next page of results.                     |