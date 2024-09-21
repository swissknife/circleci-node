# DeleteOrgClaimsRequest

## Example Usage

```typescript
import { DeleteOrgClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteOrgClaimsRequest = {
  claims: "<value>",
  orgID: "ae8bce28-6e1f-4e17-bbbe-c47b2374d95d",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |