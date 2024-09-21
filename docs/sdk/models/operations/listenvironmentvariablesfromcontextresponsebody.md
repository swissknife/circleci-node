# ListEnvironmentVariablesFromContextResponseBody

A paginated list of environment variables

## Example Usage

```typescript
import { ListEnvironmentVariablesFromContextResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListEnvironmentVariablesFromContextResponseBody = {
  items: [
    {
      contextId: "715ba9b3-5ae8-440b-b058-e160594319ba",
      createdAt: new Date("2015-09-21T17:29:21.042Z"),
      updatedAt: new Date("2015-09-21T17:29:21.042Z"),
      variable: "POSTGRES_USER",
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Items](../../../sdk/models/operations/items.md)[]                         | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |