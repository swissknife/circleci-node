# DeleteProjectClaimsRequest

## Example Usage

```typescript
import { DeleteProjectClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteProjectClaimsRequest = {
    claims: "<value>",
    orgID: "309fb092-9921-4aef-b9f5-8c4d86e68e4b",
    projectID: "e056013f-59da-4757-a59e-cfef66ef1caa",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |