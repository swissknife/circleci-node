# ListWorkflowsByPipelineIdWorkflowListResponse

A list of workflows and associated pagination token.

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdWorkflowListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdWorkflowListResponse = {
  items: [
    {
      createdAt: new Date("2024-04-18T00:54:24.193Z"),
      id: "8261bfc6-9484-4b4f-aa10-f353ea885963",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "5c68c7fc-df69-4baf-a44e-c39b5697c065",
      status: "on_hold",
      stoppedAt: new Date("2022-03-25T10:55:20.447Z"),
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