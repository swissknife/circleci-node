# Digest

The fingerprint digest type to return. This may be either `md5` or `sha256`. If not passed, defaults to `md5`.

## Example Usage

```typescript
import { Digest } from "circleci-v2-sdk/sdk/models/operations";

let value: Digest = "md5";
```

## Values

```typescript
"sha256" | "md5"
```