# ListWorkflowJobsWorkflowJobListResponse

A paginated sequence of jobs.

## Example Usage

```typescript
import { ListWorkflowJobsWorkflowJobListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsWorkflowJobListResponse = {
  items: [
    {
      dependencies: [
        "1193aed3-1ff5-472b-96c9-05cbaa9a98c5",
      ],
      id: "63505613-3352-4b51-8920-26ba0c5a060d",
      jobNumber: 1,
      name: "<value>",
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      requires: {
        "d212e286-9962-4ed7-92e2-8699622ed720": [
          "success",
        ],
        "74be7583-44de-42a6-be75-8344de52a6f2": [
          "failed",
          "canceled",
        ],
        "a3349b77-90f7-4a39-b49b-7790f7da3943": [
          "success",
          "failed",
          "canceled",
        ],
      },
      startedAt: new Date("2025-01-09T07:18:29.374Z"),
      status: "failed",
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