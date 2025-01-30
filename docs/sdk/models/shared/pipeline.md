# Pipeline

## Example Usage

```typescript
import { Pipeline } from "circleci-v2-sdk/sdk/models/shared";

let value: Pipeline = {
  number: 25,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `number`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 25                                                                                            |
| `state`                                                                                       | [shared.PipelineState](../../../sdk/models/shared/pipelinestate.md)                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |