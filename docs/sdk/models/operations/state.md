# State

The current state of the pipeline.

## Example Usage

```typescript
import { State } from "circleci-v2-sdk/sdk/models/operations";

let value: State = "setup-pending";
```

## Values

```typescript
"created" | "errored" | "setup-pending" | "setup" | "pending"
```