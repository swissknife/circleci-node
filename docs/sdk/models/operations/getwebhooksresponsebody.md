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
      id: "6f86f145-dc4d-417a-9414-75610e14ad5a",
      name: "<value>",
      scope: {
        id: "060fc536-55e6-4b28-a79a-d3609e6f938a",
        type: "<value>",
      },
      signingSecret: "<value>",
      updatedAt: new Date("2015-09-21T17:29:21.042Z"),
      url: "https://devoted-cross-contamination.biz",
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