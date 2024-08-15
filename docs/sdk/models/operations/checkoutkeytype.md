# CheckoutKeyType

The type of checkout key. This may be either `deploy-key` or `github-user-key`.

## Example Usage

```typescript
import { CheckoutKeyType } from "circleci-v2-sdk/sdk/models/operations";

let value: CheckoutKeyType = "deploy-key";
```

## Values

```typescript
"deploy-key" | "github-user-key"
```