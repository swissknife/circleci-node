# GetWorkflowByIdResponse

## Example Usage

```typescript
import { GetWorkflowByIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowByIdResponse = {
    createdAt: new Date("2023-04-03T01:33:01.281Z"),
    id: "56946240-7084-4f7a-b37c-ef02225194db",
    name: "build-and-test",
    pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
    pipelineNumber: 25,
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    startedBy: "55410adc-669a-4f90-a26c-7cdc981f0689",
    status: "error",
    stoppedAt: new Date("2022-03-11T10:51:29.729Z"),
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

