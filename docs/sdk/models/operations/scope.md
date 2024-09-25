# Scope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { Scope } from "circleci-v2-sdk/sdk/models/operations";

let value: Scope = {
  id: "c106e42e-25b4-436c-be02-f98d00fdb27e",
  type: "project",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the scope being used (at the moment, only project ID is supported)            |
| `type`                                                                              | [operations.CreateWebhookType](../../../sdk/models/operations/createwebhooktype.md) | :heavy_check_mark:                                                                  | Type of the scope being used                                                        |