# GetWorkflowByIdStatus

The current status of the workflow.

## Example Usage

```typescript
import { GetWorkflowByIdStatus } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowByIdStatus = "unauthorized";
```

## Values

```typescript
"success" | "running" | "not_run" | "failed" | "error" | "failing" | "on_hold" | "canceled" | "unauthorized"
```