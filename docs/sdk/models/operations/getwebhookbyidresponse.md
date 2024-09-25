# GetWebhookByIdResponse

## Example Usage

```typescript
import { GetWebhookByIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhookByIdResponse = {
  createdAt: new Date("2015-09-21T17:29:21.042Z"),
  events: [
    "workflow-completed",
  ],
  id: "455b35ce-918a-45dc-992b-e4fc4941da92",
  name: "<value>",
  scope: {
    id: "e2034ca0-09a2-4935-a61f-f74fdb76c8a9",
    type: "<value>",
  },
  signingSecret: "<value>",
  updatedAt: new Date("2015-09-21T17:29:21.042Z"),
  url: "https://humble-colon.biz/",
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

