# ListWorkflowsByPipelineIdResponse

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdResponse = {
    items: [
        {
            createdAt: new Date("2023-01-28T02:27:48.376Z"),
            id: "62a7b408-f05e-43d4-8fda-f313a1f5fd94",
            name: "build-and-test",
            pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
            pipelineNumber: 25,
            projectSlug: "gh/CircleCI-Public/api-preview-docs",
            startedBy: "259c0b36-f25e-4a94-8f3b-756c11f6c37a",
            status: "not_run",
            stoppedAt: new Date("2022-04-23T06:44:49.188Z"),
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

