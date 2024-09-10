# CreateContextRequestBody

## Example Usage

```typescript
import { CreateContextRequestBody } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateContextRequestBody = {
  name: "<value>",
  owner: {
    id: "f5ad019d-a1ff-4e78-b097-b0074f15471b",
    type: "organization",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `name`                                | *string*                              | :heavy_check_mark:                    | The user defined name of the context. |
| `owner`                               | *operations.Owner*                    | :heavy_check_mark:                    | N/A                                   |