# Errors

An error with a type and message.

## Example Usage

```typescript
import { Errors } from "circleci-v2-sdk/sdk/models/operations";

let value: Errors = {
  message: "<value>",
  type: "plan",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `message`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | A human-readable error message.                                                         |
| `type`                                                                                  | [operations.GetPipelineByIdType](../../../sdk/models/operations/getpipelinebyidtype.md) | :heavy_check_mark:                                                                      | The type of error.                                                                      |