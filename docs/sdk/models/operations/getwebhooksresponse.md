# GetWebhooksResponse


## Supported Types

### `operations.GetWebhooksResponseBody`

```typescript
const value: operations.GetWebhooksResponseBody = {
  items: [
    {
      createdAt: new Date("2015-09-21T17:29:21.042Z"),
      events: [
        "workflow-completed",
      ],
      id: "0539ebcf-a99d-46ca-8403-b946a266885c",
      name: "<value>",
      scope: {
        id: "06e42e25-b436-4ce0-b2f9-8d00fdb27ee0",
        type: "<value>",
      },
      signingSecret: "<value>",
      updatedAt: new Date("2015-09-21T17:29:21.042Z"),
      url: "https://worthwhile-heartbeat.org/",
      verifyTls: false,
    },
  ],
  nextPageToken: "<value>",
};
```

### `operations.GetWebhooksWebhookResponseBody`

```typescript
const value: operations.GetWebhooksWebhookResponseBody = {};
```

