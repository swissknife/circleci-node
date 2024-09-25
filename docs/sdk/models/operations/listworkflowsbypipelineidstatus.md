# ListWorkflowsByPipelineIdStatus

The current status of the workflow.

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdStatus } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdStatus = "success";
```

## Values

```typescript
"success" | "running" | "not_run" | "failed" | "error" | "failing" | "on_hold" | "canceled" | "unauthorized"
```