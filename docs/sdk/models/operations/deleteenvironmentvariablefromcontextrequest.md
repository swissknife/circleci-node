# DeleteEnvironmentVariableFromContextRequest

## Example Usage

```typescript
import { DeleteEnvironmentVariableFromContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteEnvironmentVariableFromContextRequest = {
    contextId: "4469b6e2-1419-4598-90af-a563e2516fe4",
    envVarName: "POSTGRES_USER",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `contextId`                          | *string*                             | :heavy_check_mark:                   | ID of the context (UUID)             |                                      |
| `envVarName`                         | *string*                             | :heavy_check_mark:                   | The name of the environment variable | POSTGRES_USER                        |