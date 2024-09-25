# UpdateWebhookScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { UpdateWebhookScope } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookScope = {
  id: "831c3883-700e-46e7-8641-49c8c29e33bc",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |