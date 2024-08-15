# CheckoutKeyInputType

The type of checkout key to create. This may be either `deploy-key` or `user-key`.

## Example Usage

```typescript
import { CheckoutKeyInputType } from "circleci-v2-sdk/sdk/models/operations";

let value: CheckoutKeyInputType = "deploy-key";
```

## Values

```typescript
"user-key" | "deploy-key"
```