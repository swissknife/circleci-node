# GetPolicyDocumentRequest

## Example Usage

```typescript
import { GetPolicyDocumentRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: GetPolicyDocumentRequest = {
  context: "<value>",
  ownerID: "<id>",
  policyName: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `context`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `ownerID`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `policyName`                                     | *string*                                         | :heavy_check_mark:                               | the policy name set by the rego policy_name rule |