# ListMyPipelinesErrors

An error with a type and message.

## Example Usage

```typescript
import { ListMyPipelinesErrors } from "circleci-v2-sdk/sdk/models/operations";

let value: ListMyPipelinesErrors = {
  message: "<value>",
  type: "config-fetch",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `message`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | A human-readable error message.                                                         |
| `type`                                                                                  | [operations.ListMyPipelinesType](../../../sdk/models/operations/listmypipelinestype.md) | :heavy_check_mark:                                                                      | The type of error.                                                                      |