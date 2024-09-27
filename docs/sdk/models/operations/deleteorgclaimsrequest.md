# DeleteOrgClaimsRequest

## Example Usage

```typescript
import { DeleteOrgClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteOrgClaimsRequest = {
  claims: "<value>",
  orgID: "e12b196b-ecd0-4486-834f-450d234e3cce",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |