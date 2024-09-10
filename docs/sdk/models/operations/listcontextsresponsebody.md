# ListContextsResponseBody

A paginated list of contexts

## Example Usage

```typescript
import { ListContextsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListContextsResponseBody = {
  items: [
    {
      createdAt: new Date("2015-09-21T17:29:21.042Z"),
      id: "3f9b77f3-a410-4067-8ebf-69280d1ba77a",
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