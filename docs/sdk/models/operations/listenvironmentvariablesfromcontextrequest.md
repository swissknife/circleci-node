# ListEnvironmentVariablesFromContextRequest

## Example Usage

```typescript
import { ListEnvironmentVariablesFromContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: ListEnvironmentVariablesFromContextRequest = {
  contextId: "ffe4f31f-3b0b-4e46-b5b3-274d38fadfcb",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `contextId`                                   | *string*                                      | :heavy_check_mark:                            | ID of the context (UUID)                      |
| `pageToken`                                   | *string*                                      | :heavy_minus_sign:                            | A token to retrieve the next page of results. |