# UpdateWebhookResponse

## Example Usage

```typescript
import { UpdateWebhookResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookResponse = {
  createdAt: new Date("2015-09-21T17:29:21.042Z"),
  events: [
    "workflow-completed",
  ],
  id: "c001a6d4-7b85-4282-bf82-b1c720f4f881",
  name: "<value>",
  scope: {
    id: "b8126581-0800-4606-8336-156de4492506",
    type: "<value>",
  },
  signingSecret: "<value>",
  updatedAt: new Date("2015-09-21T17:29:21.042Z"),
  url: "https://profuse-willow.biz",
  verifyTls: false,
};
```

## Supported Types

### `operations.UpdateWebhookWebhook`

```typescript
const value: operations.UpdateWebhookWebhook = /* values here */
```

### `operations.UpdateWebhookResponseBody`

```typescript
const value: operations.UpdateWebhookResponseBody = /* values here */
```

