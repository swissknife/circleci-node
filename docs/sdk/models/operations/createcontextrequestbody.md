# CreateContextRequestBody

## Example Usage

```typescript
import { CreateContextRequestBody } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateContextRequestBody = {
  name: "<value>",
  owner: {
    id: "a4962499-9aa6-4e56-9ecb-1ebf2d291dc9",
    type: "organization",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `name`                                | *string*                              | :heavy_check_mark:                    | The user defined name of the context. |
| `owner`                               | *operations.Owner*                    | :heavy_check_mark:                    | N/A                                   |