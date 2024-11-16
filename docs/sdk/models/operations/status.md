# Status

The current status of the workflow.

## Example Usage

```typescript
import { Status } from "circleci-v2-sdk/sdk/models/operations";

let value: Status = "unauthorized";
```

## Values

```typescript
"success" | "running" | "not_run" | "failed" | "error" | "failing" | "on_hold" | "canceled" | "unauthorized"
```