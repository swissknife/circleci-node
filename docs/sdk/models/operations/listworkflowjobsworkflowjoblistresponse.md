# ListWorkflowJobsWorkflowJobListResponse

A paginated sequence of jobs.

## Example Usage

```typescript
import { ListWorkflowJobsWorkflowJobListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsWorkflowJobListResponse = {
  items: [
    {
      dependencies: [
        "61193aed-31ff-4572-9b6c-905cbaa9a98c",
      ],
      id: "76350561-3335-42b5-b192-026ba0c5a060",
      jobNumber: 1,
      name: "<value>",
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedAt: new Date("2022-07-24T21:59:04.978Z"),
      status: "on_hold",
      type: "build",
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Job](../../../sdk/models/operations/job.md)[]                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |