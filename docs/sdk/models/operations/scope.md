# Scope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { Scope } from "circleci-v2-sdk/sdk/models/operations";

let value: Scope = {
  id: "bad25538-19b4-474b-8ed2-0e56248fff63",
  type: "project",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the scope being used (at the moment, only project ID is supported)            |
| `type`                                                                              | [operations.CreateWebhookType](../../../sdk/models/operations/createwebhooktype.md) | :heavy_check_mark:                                                                  | Type of the scope being used                                                        |