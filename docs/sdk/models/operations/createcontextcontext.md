# CreateContextContext

The new context

## Example Usage

```typescript
import { CreateContextContext } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateContextContext = {
  createdAt: new Date("2015-09-21T17:29:21.042Z"),
  id: "961b7bdf-d05b-4280-a30c-35eb02993e98",
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the context was created.                                                    | 2015-09-21T17:29:21.042Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the context.                                                                 |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The user defined name of the context.                                                         |                                                                                               |