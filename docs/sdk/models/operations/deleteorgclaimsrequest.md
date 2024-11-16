# DeleteOrgClaimsRequest

## Example Usage

```typescript
import { DeleteOrgClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteOrgClaimsRequest = {
  claims: "<value>",
  orgID: "64b5bd3f-2425-478d-be39-17557b1eb2f8",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |