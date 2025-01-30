# CreateWebhookScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { CreateWebhookScope } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateWebhookScope = {
  id: "cb2acc1a-bd87-4fc8-a5d7-17d709fd9ed7",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |