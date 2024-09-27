# DeleteProjectClaimsRequest

## Example Usage

```typescript
import { DeleteProjectClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteProjectClaimsRequest = {
  claims: "<value>",
  orgID: "25ef3c4e-2a1f-4bd9-b798-7c22651dc8f1",
  projectID: "453c2da0-caeb-48d4-a84f-305808db9ffd",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |