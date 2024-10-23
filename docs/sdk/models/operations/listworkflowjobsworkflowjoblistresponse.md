# ListWorkflowJobsWorkflowJobListResponse

A paginated sequence of jobs.

## Example Usage

```typescript
import { ListWorkflowJobsWorkflowJobListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsWorkflowJobListResponse = {
  items: [
    {
      dependencies: [
        "71162e36-85a9-4fd9-b799-428460a0b329",
      ],
      id: "6d08a620-6bf7-4451-97a9-0aa8f4d243ec",
      jobNumber: 1,
      name: "<value>",
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedAt: new Date("2023-02-19T07:31:07.980Z"),
      status: "success",
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