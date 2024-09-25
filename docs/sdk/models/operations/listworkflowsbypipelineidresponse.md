# ListWorkflowsByPipelineIdResponse

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdResponse = {
  items: [
    {
      createdAt: new Date("2022-11-03T12:40:15.931Z"),
      id: "977de7ac-84a9-4e0e-a805-b7f65d8aca61",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "e6e89d91-f3b8-473b-a1fd-8648e48353f9",
      status: "success",
      stoppedAt: new Date("2023-02-06T06:21:21.734Z"),
      tag: "setup",
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `operations.ListWorkflowsByPipelineIdWorkflowListResponse`

```typescript
const value: operations.ListWorkflowsByPipelineIdWorkflowListResponse = /* values here */
```

### `operations.ListWorkflowsByPipelineIdResponseBody`

```typescript
const value: operations.ListWorkflowsByPipelineIdResponseBody = /* values here */
```

