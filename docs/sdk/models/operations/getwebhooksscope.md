# GetWebhooksScope

The scope in which the relevant events that will trigger webhooks

## Example Usage

```typescript
import { GetWebhooksScope } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksScope = {
  id: "6e2034ca-009a-4293-a561-ff74fdb76c8a",
  type: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of the scope being used (at the moment, only project ID is supported) |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Type of the scope being used                                             |