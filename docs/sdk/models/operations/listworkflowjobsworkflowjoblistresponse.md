# ListWorkflowJobsWorkflowJobListResponse

A paginated sequence of jobs.

## Example Usage

```typescript
import { ListWorkflowJobsWorkflowJobListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsWorkflowJobListResponse = {
  items: [
    {
      dependencies: [
        "06c8ca12-d025-4292-b0b8-d5722dd895b8",
      ],
      id: "bcf24db9-5969-4335-af74-533994d78de3",
      name: "<value>",
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedAt: new Date("2024-02-25T14:34:33.243Z"),
      status: "queued",
      type: "approval",
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