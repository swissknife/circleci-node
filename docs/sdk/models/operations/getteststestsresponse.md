# GetTestsTestsResponse

A paginated list of test results.

## Example Usage

```typescript
import { GetTestsTestsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetTestsTestsResponse = {
  items: [
    {
      classname: "",
      file: "",
      message: "",
      name: "",
      result: "",
      runTime: ,
      source: "",
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.GetTestsItems](../../../sdk/models/operations/gettestsitems.md)[]         | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |