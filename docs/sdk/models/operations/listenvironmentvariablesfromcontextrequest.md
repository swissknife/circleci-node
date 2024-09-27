# ListEnvironmentVariablesFromContextRequest

## Example Usage

```typescript
import { ListEnvironmentVariablesFromContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: ListEnvironmentVariablesFromContextRequest = {
  contextId: "d38fadfc-bff7-4142-8629-6ef849e68476",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `contextId`                                   | *string*                                      | :heavy_check_mark:                            | ID of the context (UUID)                      |
| `pageToken`                                   | *string*                                      | :heavy_minus_sign:                            | A token to retrieve the next page of results. |