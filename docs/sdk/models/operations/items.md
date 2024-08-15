# Items

## Example Usage

```typescript
import { Items } from "circleci-v2-sdk/sdk/models/operations";

let value: Items = {
    contextId: "fce953f7-3ef7-4fbc-babd-74dd39c0f5d2",
    createdAt: new Date("2015-09-21T17:29:21.042Z"),
    updatedAt: new Date("2015-09-21T17:29:21.042Z"),
    variable: "POSTGRES_USER",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contextId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the context (UUID)                                                                      |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the environment variable was created.                                       | 2015-09-21T17:29:21.042Z                                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the environment variable was updated                                        | 2015-09-21T17:29:21.042Z                                                                      |
| `variable`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the environment variable                                                          | POSTGRES_USER                                                                                 |