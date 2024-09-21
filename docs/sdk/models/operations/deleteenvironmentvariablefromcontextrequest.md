# DeleteEnvironmentVariableFromContextRequest

## Example Usage

```typescript
import { DeleteEnvironmentVariableFromContextRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteEnvironmentVariableFromContextRequest = {
  contextId: "89f4310e-ac49-417f-be5f-3ffcad4d9052",
  envVarName: "POSTGRES_USER",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `contextId`                          | *string*                             | :heavy_check_mark:                   | ID of the context (UUID)             |                                      |
| `envVarName`                         | *string*                             | :heavy_check_mark:                   | The name of the environment variable | POSTGRES_USER                        |