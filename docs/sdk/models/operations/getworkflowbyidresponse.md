# GetWorkflowByIdResponse

## Example Usage

```typescript
import { GetWorkflowByIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowByIdResponse = {
  createdAt: new Date("2024-10-12T01:13:22.370Z"),
  id: "90439d22-2465-4694-a240-7084f7ab37ce",
  name: "build-and-test",
  pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  pipelineNumber: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  startedBy: "f0222519-4db5-4541-8adc-669af90a26c7",
  status: "canceled",
  stoppedAt: new Date("2024-06-12T04:26:03.581Z"),
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

