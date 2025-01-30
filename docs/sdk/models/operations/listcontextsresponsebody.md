# ListContextsResponseBody

A paginated list of contexts

## Example Usage

```typescript
import { ListContextsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListContextsResponseBody = {
  items: [
    {
      createdAt: new Date("2015-09-21T17:29:21.042Z"),
      id: "53900614-3420-419f-af62-a7f1c43a3a86",
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