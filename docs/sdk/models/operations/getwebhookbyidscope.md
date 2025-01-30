# GetWebhookByIdScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { GetWebhookByIdScope } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhookByIdScope = {
  id: "b6fc50a3-1ef4-4427-bdbd-3be4b64f5167",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |