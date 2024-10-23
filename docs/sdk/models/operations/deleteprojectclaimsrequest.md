# DeleteProjectClaimsRequest

## Example Usage

```typescript
import { DeleteProjectClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteProjectClaimsRequest = {
  claims: "<value>",
  orgID: "b525ef3c-4e2a-41fb-bd97-987c22651dc8",
  projectID: "1c453c2d-a0ca-4eb8-bd48-4f305808db9f",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |