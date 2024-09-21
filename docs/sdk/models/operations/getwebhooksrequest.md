# GetWebhooksRequest

## Example Usage

```typescript
import { GetWebhooksRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksRequest = {
  scopeId: "55455b35-ce91-48a5-adc9-2be4fc4941da",
  scopeType: "project",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scopeId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `scopeType`                                                              | [operations.ScopeType](../../../sdk/models/operations/scopetype.md)      | :heavy_check_mark:                                                       | Type of the scope being used                                             |