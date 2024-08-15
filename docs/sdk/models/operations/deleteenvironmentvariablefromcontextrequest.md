# DeleteEnvironmentVariableFromContextRequest

## Example Usage

```typescript
import { DeleteEnvironmentVariableFromContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteEnvironmentVariableFromContextRequest = {
    contextId: "1fb576b0-d5f0-4d30-85fb-b2587053202c",
    envVarName: "POSTGRES_USER",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `contextId`                          | *string*                             | :heavy_check_mark:                   | ID of the context (UUID)             |                                      |
| `envVarName`                         | *string*                             | :heavy_check_mark:                   | The name of the environment variable | POSTGRES_USER                        |