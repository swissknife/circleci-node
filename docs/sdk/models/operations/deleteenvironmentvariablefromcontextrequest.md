# DeleteEnvironmentVariableFromContextRequest

## Example Usage

```typescript
import { DeleteEnvironmentVariableFromContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteEnvironmentVariableFromContextRequest = {
  contextId: "5fcbe189-f431-40ea-9c49-17fe5f3ffcad",
  envVarName: "POSTGRES_USER",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `contextId`                          | *string*                             | :heavy_check_mark:                   | ID of the context (UUID)             |                                      |
| `envVarName`                         | *string*                             | :heavy_check_mark:                   | The name of the environment variable | POSTGRES_USER                        |