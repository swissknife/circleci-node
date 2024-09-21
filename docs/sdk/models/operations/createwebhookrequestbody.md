# CreateWebhookRequestBody

The parameters for a create webhook request

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateWebhookRequestBody = {
  events: [
    "job-completed",
  ],
  name: "<value>",
  scope: {
    id: "0c0f6f54-5b3d-49ff-a2f0-0ff277dac7ab",
    type: "project",
  },
  signingSecret: "<value>",
  url: "https://buzzing-freezing.com/",
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