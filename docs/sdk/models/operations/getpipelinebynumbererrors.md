# GetPipelineByNumberErrors

An error with a type and message.

## Example Usage

```typescript
import { GetPipelineByNumberErrors } from "circleci-v2-sdk/sdk/models/operations";

let value: GetPipelineByNumberErrors = {
    message: "<value>",
    type: "trigger-rule",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `message`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | A human-readable error message.                                                                 |
| `type`                                                                                          | [operations.GetPipelineByNumberType](../../../sdk/models/operations/getpipelinebynumbertype.md) | :heavy_check_mark:                                                                              | The type of error.                                                                              |