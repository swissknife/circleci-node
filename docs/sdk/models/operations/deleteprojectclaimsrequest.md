# DeleteProjectClaimsRequest

## Example Usage

```typescript
import { DeleteProjectClaimsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteProjectClaimsRequest = {
  claims: "<value>",
  orgID: "803f9147-0673-49c3-99af-cd72f271ffb5",
  projectID: "42825ab0-6ad7-4f40-b74d-34cb8b600810",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `claims`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | comma separated list of claims to delete. Valid values are "audience" and "ttl". |
| `orgID`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |