# One

## Example Usage

```typescript
import { One } from "circleci-v2-sdk/sdk/models/operations";

let value: One = {
    id: "5955907a-ff1a-43a2-ba94-67739251aa52",
    type: "organization",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique ID of the owner of the context. Specify either this or slug.                                |                                                                                                        |
| `type`                                                                                                 | [operations.Type](../../../sdk/models/operations/type.md)                                              | :heavy_minus_sign:                                                                                     | The type of the owner. Defaults to "organization". Accounts are only used as context owners in server. | organization                                                                                           |