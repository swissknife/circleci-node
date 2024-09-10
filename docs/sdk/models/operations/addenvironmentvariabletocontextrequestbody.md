# AddEnvironmentVariableToContextRequestBody

## Example Usage

```typescript
import { AddEnvironmentVariableToContextRequestBody } from "circleci-v2-sdk/sdk/models/operations";

let value: AddEnvironmentVariableToContextRequestBody = {
  value: "some-secret-value",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `value`                               | *string*                              | :heavy_check_mark:                    | The value of the environment variable | some-secret-value                     |