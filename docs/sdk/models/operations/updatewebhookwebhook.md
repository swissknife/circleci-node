# UpdateWebhookWebhook

A webhook

## Example Usage

```typescript
import { UpdateWebhookWebhook } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookWebhook = {
  createdAt: new Date("2015-09-21T17:29:21.042Z"),
  events: [
    "workflow-completed",
  ],
  id: "5a697cdd-9970-4417-9d9a-342d48215559",
  name: "<value>",
  scope: {
    id: "c15a9174-a2a7-44b3-820d-781158b7d606",
    type: "<value>",
  },
  signingSecret: "<value>",
  updatedAt: new Date("2015-09-21T17:29:21.042Z"),
  url: "https://worthy-story.biz/",
  verifyTls: false,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | The date and time the webhook was created.                                                                         | 2015-09-21T17:29:21.042Z                                                                                           |
| `events`                                                                                                           | [operations.UpdateWebhookWebhookEvents](../../../sdk/models/operations/updatewebhookwebhookevents.md)[]            | :heavy_check_mark:                                                                                                 | Events that will trigger the webhook                                                                               |                                                                                                                    |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique ID of the webhook                                                                                       |                                                                                                                    |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Name of the webhook                                                                                                |                                                                                                                    |
| `scope`                                                                                                            | [operations.UpdateWebhookScope](../../../sdk/models/operations/updatewebhookscope.md)                              | :heavy_check_mark:                                                                                                 | The scope in which the relevant events that will trigger webhooks                                                  |                                                                                                                    |
| `signingSecret`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request |                                                                                                                    |
| `updatedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | The date and time the webhook was last updated.                                                                    | 2015-09-21T17:29:21.042Z                                                                                           |
| `url`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)                   |                                                                                                                    |
| `verifyTls`                                                                                                        | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Whether to enforce TLS certificate verification when delivering the webhook                                        |                                                                                                                    |