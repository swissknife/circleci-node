# CreateEnvVarEnvironmentVariable

An environment variable request requires a name and a value

## Example Usage

```typescript
import { CreateEnvVarEnvironmentVariable } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateEnvVarEnvironmentVariable = {
    name: "foo",
    value: "xxxx1234",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `name`                                 | *string*                               | :heavy_check_mark:                     | The name of the environment variable.  | foo                                    |
| `value`                                | *string*                               | :heavy_check_mark:                     | The value of the environment variable. | xxxx1234                               |