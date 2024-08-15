# AddEnvironmentVariableToContextRequest

## Example Usage

```typescript
import { AddEnvironmentVariableToContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: AddEnvironmentVariableToContextRequest = {
    requestBody: {
        value: "some-secret-value",
    },
    contextId: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    envVarName: "POSTGRES_USER",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                                         | [operations.AddEnvironmentVariableToContextRequestBody](../../../sdk/models/operations/addenvironmentvariabletocontextrequestbody.md) | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |
| `contextId`                                                                                                                           | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | ID of the context (UUID)                                                                                                              |                                                                                                                                       |
| `envVarName`                                                                                                                          | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The name of the environment variable                                                                                                  | POSTGRES_USER                                                                                                                         |