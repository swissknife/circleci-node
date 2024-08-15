# UpdateWebhookScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { UpdateWebhookScope } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookScope = {
    id: "c158c4c4-e545-499e-a342-260e9b200ce7",
    type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |