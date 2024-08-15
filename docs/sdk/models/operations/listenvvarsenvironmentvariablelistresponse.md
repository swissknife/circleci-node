# ListEnvVarsEnvironmentVariableListResponse

A sequence of environment variables.

## Example Usage

```typescript
import { ListEnvVarsEnvironmentVariableListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListEnvVarsEnvironmentVariableListResponse = {
    items: [
        {
            createdAt: "#joda/inst 2023-04-14T21:20:14+0000",
            name: "foo",
            value: "xxxx1234",
        },
    ],
    nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `items`                                                                                   | [operations.EnvironmentVariable](../../../sdk/models/operations/environmentvariable.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_check_mark:                                                                        | A token to pass as a `page-token` query parameter to return the next page of results.     |