# Context

## Example Usage

```typescript
import { Context } from "circleci-v2-sdk/sdk/models/operations";

let value: Context = {
  createdAt: new Date("2015-09-21T17:29:21.042Z"),
  id: "88a426f2-e87e-47b6-aebb-5ca32cf79d7f",
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the context was created.                                                    | 2015-09-21T17:29:21.042Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the context.                                                                 |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The user defined name of the context.                                                         |                                                                                               |