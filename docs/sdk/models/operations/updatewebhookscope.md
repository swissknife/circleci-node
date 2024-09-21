# UpdateWebhookScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { UpdateWebhookScope } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookScope = {
  id: "0831c388-3700-4e6e-b764-149c8c29e33b",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |