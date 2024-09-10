# Two

## Example Usage

```typescript
import { Two } from "circleci-v2-sdk/sdk/models/operations";

let value: Two = {
  slug: "<value>",
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`                                                                                                                                              | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | A string that represents an organization. Specify either this or id. Cannot be used for accounts.                                                   |
| `type`                                                                                                                                              | [operations.CreateContextType](../../../sdk/models/operations/createcontexttype.md)                                                                 | :heavy_minus_sign:                                                                                                                                  | The type of owner. Defaults to "organization". Accounts are only used as context owners in server and must be specified by an id instead of a slug. |