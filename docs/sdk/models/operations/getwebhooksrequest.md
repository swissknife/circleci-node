# GetWebhooksRequest

## Example Usage

```typescript
import { GetWebhooksRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksRequest = {
    scopeId: "12cdaad0-ec7a-4fed-bd80-df448a47f939",
    scopeType: "project",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scopeId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `scopeType`                                                              | [operations.ScopeType](../../../sdk/models/operations/scopetype.md)      | :heavy_check_mark:                                                       | Type of the scope being used                                             |