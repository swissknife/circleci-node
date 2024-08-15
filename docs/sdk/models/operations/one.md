# One

## Example Usage

```typescript
import { One } from "circleci-v2-sdk/sdk/models/operations";

let value: One = {
    id: "2c3f5ad0-19da-41ff-a78f-097b0074f154",
    type: "organization",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique ID of the owner of the context. Specify either this or slug.                                |                                                                                                        |
| `type`                                                                                                 | [operations.Type](../../../sdk/models/operations/type.md)                                              | :heavy_minus_sign:                                                                                     | The type of the owner. Defaults to "organization". Accounts are only used as context owners in server. | organization                                                                                           |