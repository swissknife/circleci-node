# ListWorkflowsByPipelineIdWorkflowListResponse

A list of workflows and associated pagination token.


## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Workflow](../../../sdk/models/operations/workflow.md)[]                   | :heavy_check_mark:                                                                    | A list of workflows.                                                                  |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |