# GetWebhookByIdScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { GetWebhookByIdScope } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhookByIdScope = {
  id: "c67803dc-1a08-42d9-81ae-b1a9ac453761",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |