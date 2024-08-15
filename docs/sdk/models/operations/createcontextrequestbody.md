# CreateContextRequestBody

## Example Usage

```typescript
import { CreateContextRequestBody } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateContextRequestBody = {
    name: "<value>",
    owner: {
        id: "269802d5-02a9-44bb-8f63-c969e9a3efa7",
        type: "organization",
    },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `name`                                | *string*                              | :heavy_check_mark:                    | The user defined name of the context. |
| `owner`                               | *operations.Owner*                    | :heavy_check_mark:                    | N/A                                   |