# GetWorkflowByIdResponse

## Example Usage

```typescript
import { GetWorkflowByIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowByIdResponse = {
  createdAt: new Date("2022-06-17T04:58:05.871Z"),
  id: "ebbd878b-612f-40bf-b2b4-3de5a2ce5ae0",
  name: "build-and-test",
  pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  pipelineNumber: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  startedBy: "968db87e-31ab-4944-a947-5833b63d61b4",
  status: "failing",
  stoppedAt: new Date("2024-11-20T23:33:22.526Z"),
  tag: "setup",
};
```

## Supported Types

### `operations.GetWorkflowByIdWorkflow`

```typescript
const value: operations.GetWorkflowByIdWorkflow = /* values here */
```

### `operations.GetWorkflowByIdResponseBody`

```typescript
const value: operations.GetWorkflowByIdResponseBody = /* values here */
```

