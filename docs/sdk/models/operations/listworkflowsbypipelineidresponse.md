# ListWorkflowsByPipelineIdResponse

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdResponse = {
  items: [
    {
      createdAt: new Date("2023-01-01T12:34:42.729Z"),
      id: "9e24977d-e7ac-484a-b9e0-e805b7f65d8a",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "a619e6e8-9d91-4f3b-9873-b1fd8648e483",
      status: "running",
      stoppedAt: new Date("2024-12-21T15:08:34.645Z"),
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

