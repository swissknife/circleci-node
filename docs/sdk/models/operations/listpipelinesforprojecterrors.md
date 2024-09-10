# ListPipelinesForProjectErrors

An error with a type and message.

## Example Usage

```typescript
import { ListPipelinesForProjectErrors } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesForProjectErrors = {
  message: "<value>",
  type: "other",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `message`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A human-readable error message.                                                                         |
| `type`                                                                                                  | [operations.ListPipelinesForProjectType](../../../sdk/models/operations/listpipelinesforprojecttype.md) | :heavy_check_mark:                                                                                      | The type of error.                                                                                      |