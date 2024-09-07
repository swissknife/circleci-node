# ListWorkflowJobsStatus

The current status of the job.

## Example Usage

```typescript
import { ListWorkflowJobsStatus } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsStatus = "terminated-unknown";
```

## Values

```typescript
"success" | "running" | "not_run" | "failed" | "retried" | "queued" | "not_running" | "infrastructure_fail" | "timedout" | "on_hold" | "terminated-unknown" | "blocked" | "canceled" | "unauthorized"
```