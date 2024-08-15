# Scope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { Scope } from "circleci-v2-sdk/sdk/models/operations";

let value: Scope = {
    id: "00878756-143f-45a6-898b-55554080d40b",
    type: "project",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the scope being used (at the moment, only project ID is supported)            |
| `type`                                                                              | [operations.CreateWebhookType](../../../sdk/models/operations/createwebhooktype.md) | :heavy_check_mark:                                                                  | Type of the scope being used                                                        |