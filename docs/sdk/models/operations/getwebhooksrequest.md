# GetWebhooksRequest

## Example Usage

```typescript
import { GetWebhooksRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksRequest = {
  scopeId: "380f80a4-1d31-40ba-b03b-2937d4a715df",
  scopeType: "project",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scopeId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `scopeType`                                                              | [operations.ScopeType](../../../sdk/models/operations/scopetype.md)      | :heavy_check_mark:                                                       | Type of the scope being used                                             |