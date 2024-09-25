# GetWebhookByIdScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { GetWebhookByIdScope } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhookByIdScope = {
  id: "0c390d20-4e48-464e-8cc8-d7773e433dc6",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |