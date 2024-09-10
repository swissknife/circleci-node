# CreateWebhookScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { CreateWebhookScope } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateWebhookScope = {
  id: "b3ecfda8-d0c5-449e-b030-04978a61fa1c",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |