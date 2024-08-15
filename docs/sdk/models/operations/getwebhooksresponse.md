# GetWebhooksResponse

## Example Usage

```typescript
import { GetWebhooksResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksResponse = {
    items: [
        {
            createdAt: new Date("2015-09-21T17:29:21.042Z"),
            events: ["job-completed"],
            id: "e1157172-3053-477d-8fa8-9df975e35668",
            name: "<value>",
            scope: {
                id: "6092e9c3-ddc5-4f11-9dea-1026d541a4d1",
                type: "<value>",
            },
            signingSecret: "<value>",
            updatedAt: new Date("2015-09-21T17:29:21.042Z"),
            url: "https://academic-village.org",
            verifyTls: false,
        },
    ],
    nextPageToken: "<value>",
};
```

## Supported Types

### `operations.GetWebhooksResponseBody`

```typescript
const value: operations.GetWebhooksResponseBody = /* values here */
```

### `operations.GetWebhooksWebhookResponseBody`

```typescript
const value: operations.GetWebhooksWebhookResponseBody = /* values here */
```

