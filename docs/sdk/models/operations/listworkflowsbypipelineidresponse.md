# ListWorkflowsByPipelineIdResponse

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdResponse = {
  items: [
    {
      createdAt: new Date("2022-02-25T23:29:21.840Z"),
      id: "efada200-ef04-422e-b216-4cf9ab8366c7",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "23ffda9e-06be-4e48-a5c1-fc0e115c80bf",
      status: "unauthorized",
      stoppedAt: new Date("2023-11-06T02:29:10.565Z"),
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

