# CreatePolicyBundleRequest

## Example Usage

```typescript
import { CreatePolicyBundleRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: CreatePolicyBundleRequest = {
  context: "<value>",
  ownerID: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `bundlePayload`                                                     | [shared.BundlePayload](../../../sdk/models/shared/bundlepayload.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `context`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `dry`                                                               | *boolean*                                                           | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ownerID`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |