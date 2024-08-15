# DeleteOrgClaimsRequest

## Example Usage

```typescript
import { DeleteOrgClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteOrgClaimsRequest = {
    claims: "<value>",
    orgID: "16deab3f-ec95-478a-a458-4273a8418d16",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |