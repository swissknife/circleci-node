# GetWebhooksResponse

## Example Usage

```typescript
import { GetWebhooksResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksResponse = {
  items: [
    {
      createdAt: new Date("2015-09-21T17:29:21.042Z"),
      events: [
        "job-completed",
      ],
      id: "42e9e4df-6e55-4ff3-ad5f-de9438ab2863",
      name: "<value>",
      scope: {
        id: "483e591a-4f69-43dc-93e0-c7d713f52c01",
        type: "<value>",
      },
      signingSecret: "<value>",
      updatedAt: new Date("2015-09-21T17:29:21.042Z"),
      url: "https://youthful-pop.name/",
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

