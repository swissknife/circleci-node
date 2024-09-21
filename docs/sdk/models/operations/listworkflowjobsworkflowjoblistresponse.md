# ListWorkflowJobsWorkflowJobListResponse

A paginated sequence of jobs.

## Example Usage

```typescript
import { ListWorkflowJobsWorkflowJobListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsWorkflowJobListResponse = {
  items: [
    {
      dependencies: [
        "4eb7b662-84a6-4dc2-b9b8-1865953b3cf7",
      ],
      id: "2cf842e5-766c-4eaf-b39a-bc5e24794e71",
      name: "<value>",
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedAt: new Date("2024-11-24T03:17:57.386Z"),
      status: "retried",
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