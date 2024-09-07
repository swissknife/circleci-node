# GetWebhooksResponseBody

A list of webhooks

## Example Usage

```typescript
import { GetWebhooksResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksResponseBody = {
    items: [
        {
            createdAt: new Date("2015-09-21T17:29:21.042Z"),
            events: ["job-completed"],
            id: "e12c6891-f82c-4e11-9717-2305377dcfa8",
            name: "<value>",
            scope: {
                id: "9df975e3-5668-4609-ae9c-3ddc5f111dea",
                type: "<value>",
            },
            signingSecret: "<value>",
            updatedAt: new Date("2015-09-21T17:29:21.042Z"),
            url: "http://anchored-celebrity.info",
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