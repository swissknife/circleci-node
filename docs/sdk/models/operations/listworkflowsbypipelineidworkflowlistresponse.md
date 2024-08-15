# ListWorkflowsByPipelineIdWorkflowListResponse

A list of workflows and associated pagination token.

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdWorkflowListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdWorkflowListResponse = {
    items: [
        {
            createdAt: new Date("2023-07-25T15:54:31.230Z"),
            id: "366c723f-fda9-4e06-bee4-825c1fc0e115",
            name: "build-and-test",
            pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
            pipelineNumber: 25,
            projectSlug: "gh/CircleCI-Public/api-preview-docs",
            startedBy: "c80bff91-8544-4ec4-adef-cce8f1977773",
            status: "unauthorized",
            stoppedAt: new Date("2023-04-10T06:02:57.576Z"),
            tag: "setup",
        },
    ],
    nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Workflow](../../../sdk/models/operations/workflow.md)[]                   | :heavy_check_mark:                                                                    | A list of workflows.                                                                  |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |