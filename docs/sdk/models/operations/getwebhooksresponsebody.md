# GetWebhooksResponseBody

A list of webhooks

## Example Usage

```typescript
import { GetWebhooksResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksResponseBody = {
  items: [
    {
      createdAt: new Date("2015-09-21T17:29:21.042Z"),
      events: [
        "job-completed",
      ],
      id: "09935702-26bd-42ca-9ef1-1c23ef5dd999",
      name: "<value>",
      scope: {
        id: "9326b9fa-2213-49de-a68c-492727663243",
        type: "<value>",
      },
      signingSecret: "<value>",
      updatedAt: new Date("2015-09-21T17:29:21.042Z"),
      url: "https://outlandish-bookend.name",
      verifyTls: false,
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Webhook](../../../sdk/models/operations/webhook.md)[]                     | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |