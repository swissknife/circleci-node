# ListContextsResponseBody

A paginated list of contexts

## Example Usage

```typescript
import { ListContextsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListContextsResponseBody = {
    items: [
        {
            createdAt: new Date("2015-09-21T17:29:21.042Z"),
            id: "ce2af7a7-3cf3-4be4-93f8-70b326b5a734",
            name: "<value>",
        },
    ],
    nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Context](../../../sdk/models/operations/context.md)[]                     | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |