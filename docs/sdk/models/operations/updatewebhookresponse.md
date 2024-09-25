# UpdateWebhookResponse

## Example Usage

```typescript
import { UpdateWebhookResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookResponse = {
  createdAt: new Date("2015-09-21T17:29:21.042Z"),
  events: [
    "job-completed",
  ],
  id: "001a6d47-b852-482f-a82b-1c720f4f881f",
  name: "<value>",
  scope: {
    id: "81265810-8006-4063-a361-56de44925061",
    type: "<value>",
  },
  signingSecret: "<value>",
  updatedAt: new Date("2015-09-21T17:29:21.042Z"),
  url: "https://wretched-cosset.biz",
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

