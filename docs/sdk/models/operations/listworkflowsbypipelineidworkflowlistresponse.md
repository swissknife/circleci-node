# ListWorkflowsByPipelineIdWorkflowListResponse

A list of workflows and associated pagination token.

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdWorkflowListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdWorkflowListResponse = {
  items: [
    {
      createdAt: new Date("2023-12-26T05:38:43.189Z"),
      id: "c8261bfc-6948-44b4-8fa1-0f353ea88596",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "a5c68c7f-cdf6-49ba-9f44-ec39b5697c06",
      status: "failing",
      stoppedAt: new Date("2024-04-30T10:48:39.079Z"),
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