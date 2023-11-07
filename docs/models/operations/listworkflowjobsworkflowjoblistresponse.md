# ListWorkflowJobsWorkflowJobListResponse

A paginated sequence of jobs.


## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Job](../../models/operations/job.md)[]                                    | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |