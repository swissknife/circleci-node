# ListWorkflowsByPipelineIdWorkflowListResponse

A list of workflows and associated pagination token.

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdWorkflowListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdWorkflowListResponse = {
  items: [
    {
      createdAt: new Date("2024-01-07T15:32:38.599Z"),
      id: "3cc8f2e1-2b19-46be-9cd0-48634f450d23",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "e3cce13b-3422-4715-8606-17dd19d3cec1",
      status: "running",
      stoppedAt: new Date("2023-10-24T10:38:09.514Z"),
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