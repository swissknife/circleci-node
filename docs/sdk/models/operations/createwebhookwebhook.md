# CreateWebhookWebhook

A webhook

## Example Usage

```typescript
import { CreateWebhookWebhook } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateWebhookWebhook = {
  createdAt: new Date("2015-09-21T17:29:21.042Z"),
  events: [
    "job-completed",
  ],
  id: "d0c7ac82-61bf-4c69-a484-b4fa10f353ea",
  name: "<value>",
  scope: {
    id: "85963a5c-68c7-4fcd-af69-baf44ec39b56",
    type: "<value>",
  },
  signingSecret: "<value>",
  updatedAt: new Date("2015-09-21T17:29:21.042Z"),
  url: "https://slight-accompanist.info/",
  verifyTls: false,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | The date and time the webhook was created.                                                                         | 2015-09-21T17:29:21.042Z                                                                                           |
| `events`                                                                                                           | [operations.CreateWebhookEvents](../../../sdk/models/operations/createwebhookevents.md)[]                          | :heavy_check_mark:                                                                                                 | Events that will trigger the webhook                                                                               |                                                                                                                    |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique ID of the webhook                                                                                       |                                                                                                                    |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Name of the webhook                                                                                                |                                                                                                                    |
| `scope`                                                                                                            | [operations.CreateWebhookScope](../../../sdk/models/operations/createwebhookscope.md)                              | :heavy_check_mark:                                                                                                 | The scope in which the relevant events that will trigger webhooks                                                  |                                                                                                                    |
| `signingSecret`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request |                                                                                                                    |
| `updatedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | The date and time the webhook was last updated.                                                                    | 2015-09-21T17:29:21.042Z                                                                                           |
| `url`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)                   |                                                                                                                    |
| `verifyTls`                                                                                                        | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Whether to enforce TLS certificate verification when delivering the webhook                                        |                                                                                                                    |