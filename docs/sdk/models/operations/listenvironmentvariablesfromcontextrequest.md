# ListEnvironmentVariablesFromContextRequest

## Example Usage

```typescript
import { ListEnvironmentVariablesFromContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: ListEnvironmentVariablesFromContextRequest = {
    contextId: "9ebf737a-e420-43ce-9e6a-95d8a0d446ce",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `contextId`                                   | *string*                                      | :heavy_check_mark:                            | ID of the context (UUID)                      |
| `pageToken`                                   | *string*                                      | :heavy_minus_sign:                            | A token to retrieve the next page of results. |