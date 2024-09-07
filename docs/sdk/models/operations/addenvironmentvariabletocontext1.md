# AddEnvironmentVariableToContext1

## Example Usage

```typescript
import { AddEnvironmentVariableToContext1 } from "circleci-v2-sdk/sdk/models/operations";

let value: AddEnvironmentVariableToContext1 = {
    contextId: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
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