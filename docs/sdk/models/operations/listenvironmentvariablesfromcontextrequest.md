# ListEnvironmentVariablesFromContextRequest

## Example Usage

```typescript
import { ListEnvironmentVariablesFromContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: ListEnvironmentVariablesFromContextRequest = {
    contextId: "31b8b90f-3443-4a11-88e0-adcf4b921879",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `contextId`                                   | *string*                                      | :heavy_check_mark:                            | ID of the context (UUID)                      |
| `pageToken`                                   | *string*                                      | :heavy_minus_sign:                            | A token to retrieve the next page of results. |