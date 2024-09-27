# GetWebhooksRequest

## Example Usage

```typescript
import { GetWebhooksRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksRequest = {
  scopeId: "7c83d280-5a28-48e7-8124-c491391b74da",
  scopeType: "project",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scopeId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `scopeType`                                                              | [operations.ScopeType](../../../sdk/models/operations/scopetype.md)      | :heavy_check_mark:                                                       | Type of the scope being used                                             |