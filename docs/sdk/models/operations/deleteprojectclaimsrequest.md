# DeleteProjectClaimsRequest

## Example Usage

```typescript
import { DeleteProjectClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteProjectClaimsRequest = {
    claims: "<value>",
    orgID: "e056013f-59da-4757-a59e-cfef66ef1caa",
    projectID: "3383c2be-b477-4373-88d7-2f64d1db1f2c",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |