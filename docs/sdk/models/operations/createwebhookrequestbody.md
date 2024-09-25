# CreateWebhookRequestBody

The parameters for a create webhook request

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateWebhookRequestBody = {
  events: [
    "workflow-completed",
  ],
  name: "<value>",
  scope: {
    id: "c0f6f545-b3d9-4ff2-8f00-ff277dac7abb",
    type: "project",
  },
  signingSecret: "<value>",
  url: "https://heavy-bar.info/",
  verifyTls: false,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `events`                                                                                         | [operations.Events](../../../sdk/models/operations/events.md)[]                                  | :heavy_check_mark:                                                                               | Events that will trigger the webhook                                                             |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Name of the webhook                                                                              |
| `scope`                                                                                          | [operations.Scope](../../../sdk/models/operations/scope.md)                                      | :heavy_check_mark:                                                                               | The scope in which the relevant events that will trigger webhooks                                |
| `signingSecret`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | Secret used to build an HMAC hash of the payload and passed as a header in the webhook request   |
| `url`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | URL to deliver the webhook to. Note: protocol must be included as well (only https is supported) |
| `verifyTls`                                                                                      | *boolean*                                                                                        | :heavy_check_mark:                                                                               | Whether to enforce TLS certificate verification when delivering the webhook                      |