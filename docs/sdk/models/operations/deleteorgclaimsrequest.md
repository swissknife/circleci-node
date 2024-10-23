# DeleteOrgClaimsRequest

## Example Usage

```typescript
import { DeleteOrgClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteOrgClaimsRequest = {
  claims: "<value>",
  orgID: "f2e12b19-6bec-4d04-b863-4f450d234e3c",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |