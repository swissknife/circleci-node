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
      id: "7e016119-3aed-431f-af57-2b6c905cbaa9",
      name: "<value>",
      scope: {
        id: "98c57635-0561-4333-a52b-5192026ba0c5",
        type: "<value>",
      },
      signingSecret: "<value>",
      updatedAt: new Date("2015-09-21T17:29:21.042Z"),
      url: "https://immaculate-aftermath.net/",
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