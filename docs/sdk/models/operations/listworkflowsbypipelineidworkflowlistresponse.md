# ListWorkflowsByPipelineIdWorkflowListResponse

A list of workflows and associated pagination token.

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdWorkflowListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdWorkflowListResponse = {
    items: [
        {
            createdAt: new Date("2024-11-23T13:23:08.781Z"),
            id: "4b7544e4-72e8-4028-97a5-b40463a7d575",
            name: "build-and-test",
            pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
            pipelineNumber: 25,
            projectSlug: "gh/CircleCI-Public/api-preview-docs",
            startedBy: "f1400e76-4ad7-4334-ac1b-781b36a08088",
            status: "canceled",
            stoppedAt: new Date("2022-04-02T06:53:09.659Z"),
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