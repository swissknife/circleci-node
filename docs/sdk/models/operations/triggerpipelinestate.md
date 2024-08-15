# TriggerPipelineState

The current state of the pipeline.

## Example Usage

```typescript
import { TriggerPipelineState } from "circleci-v2-sdk/sdk/models/operations";

let value: TriggerPipelineState = "created";
```

## Values

```typescript
"created" | "errored" | "setup-pending" | "setup" | "pending"
```