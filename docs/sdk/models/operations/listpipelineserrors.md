# ListPipelinesErrors

An error with a type and message.

## Example Usage

```typescript
import { ListPipelinesErrors } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesErrors = {
  message: "<value>",
  type: "plan",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `message`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | A human-readable error message.                                                     |
| `type`                                                                              | [operations.ListPipelinesType](../../../sdk/models/operations/listpipelinestype.md) | :heavy_check_mark:                                                                  | The type of error.                                                                  |