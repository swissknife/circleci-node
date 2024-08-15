# GetWebhooksRequest

## Example Usage

```typescript
import { GetWebhooksRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksRequest = {
    scopeId: "5e320a31-9f4b-4adf-947c-9a867bc42426",
    scopeType: "project",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scopeId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `scopeType`                                                              | [operations.ScopeType](../../../sdk/models/operations/scopetype.md)      | :heavy_check_mark:                                                       | Type of the scope being used                                             |