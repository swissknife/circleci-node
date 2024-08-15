# ListWorkflowJobsWorkflowJobListResponse

A paginated sequence of jobs.

## Example Usage

```typescript
import { ListWorkflowJobsWorkflowJobListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsWorkflowJobListResponse = {
    items: [
        {
            dependencies: ["529270b8-d572-42dd-895b-8bcf24db9596"],
            id: "93352f74-5339-494d-b8de-3b6e9389f5ab",
            name: "<value>",
            projectSlug: "gh/CircleCI-Public/api-preview-docs",
            startedAt: new Date("2024-03-21T23:32:45.326Z"),
            status: "not_running",
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