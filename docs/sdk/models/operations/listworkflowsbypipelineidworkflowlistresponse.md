# ListWorkflowsByPipelineIdWorkflowListResponse

A list of workflows and associated pagination token.

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdWorkflowListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdWorkflowListResponse = {
  items: [
    {
      createdAt: new Date("2023-10-24T17:54:19.810Z"),
      id: "68af991f-8c06-444c-8970-ff308fe945e7",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "3417ea10-45cf-46af-9ba1-5e3db588b82c",
      status: "unauthorized",
      stoppedAt: new Date("2022-11-07T17:32:47.506Z"),
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