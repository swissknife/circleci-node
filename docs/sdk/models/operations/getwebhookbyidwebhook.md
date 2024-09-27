# GetWebhookByIdWebhook

A webhook

## Example Usage

```typescript
import { GetWebhookByIdWebhook } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhookByIdWebhook = {
  createdAt: new Date("2015-09-21T17:29:21.042Z"),
  events: [
    "workflow-completed",
  ],
  id: "825d98f6-e965-4e94-b833-2bc56c0548e0",
  name: "<value>",
  scope: {
    id: "89f24379-b06e-47d1-94b9-7ace7a6e76f0",
    type: "<value>",
  },
  signingSecret: "<value>",
  updatedAt: new Date("2015-09-21T17:29:21.042Z"),
  url: "https://known-follower.name",
  verifyTls: false,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | The date and time the webhook was created.                                                                         | 2015-09-21T17:29:21.042Z                                                                                           |
| `events`                                                                                                           | [operations.GetWebhookByIdEvents](../../../sdk/models/operations/getwebhookbyidevents.md)[]                        | :heavy_check_mark:                                                                                                 | Events that will trigger the webhook                                                                               |                                                                                                                    |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique ID of the webhook                                                                                       |                                                                                                                    |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Name of the webhook                                                                                                |                                                                                                                    |
| `scope`                                                                                                            | [operations.GetWebhookByIdScope](../../../sdk/models/operations/getwebhookbyidscope.md)                            | :heavy_check_mark:                                                                                                 | The scope in which the relevant events that will trigger webhooks                                                  |                                                                                                                    |
| `signingSecret`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request |                                                                                                                    |
| `updatedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | The date and time the webhook was last updated.                                                                    | 2015-09-21T17:29:21.042Z                                                                                           |
| `url`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)                   |                                                                                                                    |
| `verifyTls`                                                                                                        | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Whether to enforce TLS certificate verification when delivering the webhook                                        |                                                                                                                    |