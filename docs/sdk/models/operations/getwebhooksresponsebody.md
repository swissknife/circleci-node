# GetWebhooksResponseBody

A list of webhooks

## Example Usage

```typescript
import { GetWebhooksResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWebhooksResponseBody = {
    items: [
        {
            createdAt: new Date("2015-09-21T17:29:21.042Z"),
            events: ["workflow-completed"],
            id: "d281187d-5684-44ed-ad85-a9065e628bdf",
            name: "<value>",
            scope: {
                id: "c2032b6c-8799-423b-be13-584f7ae12c68",
                type: "<value>",
            },
            signingSecret: "<value>",
            updatedAt: new Date("2015-09-21T17:29:21.042Z"),
            url: "https://celebrated-valance.name",
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