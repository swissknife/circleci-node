# GetWebhookByIdResponse

## Example Usage

```typescript
import { GetWebhookByIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhookByIdResponse = {
    createdAt: new Date("2015-09-21T17:29:21.042Z"),
    events: ["workflow-completed"],
    id: "02d72165-7650-4664-9870-d9d21f9ad030",
    name: "<value>",
    scope: {
        id: "c4ecc11a-0836-4429-868b-8502a55e7f73",
        type: "<value>",
    },
    signingSecret: "<value>",
    updatedAt: new Date("2015-09-21T17:29:21.042Z"),
    url: "https://spiffy-legend.biz",
    verifyTls: false,
};
```

## Supported Types

### `operations.GetWebhookByIdWebhook`

```typescript
const value: operations.GetWebhookByIdWebhook = /* values here */
```

### `operations.GetWebhookByIdResponseBody`

```typescript
const value: operations.GetWebhookByIdResponseBody = /* values here */
```

