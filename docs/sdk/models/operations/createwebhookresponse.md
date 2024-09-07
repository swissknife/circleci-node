# CreateWebhookResponse

## Example Usage

```typescript
import { CreateWebhookResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateWebhookResponse = {
    createdAt: new Date("2015-09-21T17:29:21.042Z"),
    events: ["job-completed"],
    id: "ecd79939-0066-4a6d-ad00-0355338cec08",
    name: "<value>",
    scope: {
        id: "6fa21e91-52cb-4311-9167-b8e3c8db0340",
        type: "<value>",
    },
    signingSecret: "<value>",
    updatedAt: new Date("2015-09-21T17:29:21.042Z"),
    url: "https://sweltering-hash.org",
    verifyTls: false,
};
```

## Supported Types

### `operations.CreateWebhookWebhook`

```typescript
const value: operations.CreateWebhookWebhook = /* values here */
```

### `operations.CreateWebhookResponseBody`

```typescript
const value: operations.CreateWebhookResponseBody = /* values here */
```

