# GetPipelineByNumberTrigger

A summary of the trigger.

## Example Usage

```typescript
import { GetPipelineByNumberTrigger } from "circleci-v2-sdk/sdk/models/operations";

let value: GetPipelineByNumberTrigger = {
  actor: {
    avatarUrl: "<value>",
    login: "Vincenzo.Weissnat46",
  },
  receivedAt: new Date("2022-01-06T05:55:38.572Z"),
  type: "api",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `actor`                                                                                                         | [operations.GetPipelineByNumberActor](../../../sdk/models/operations/getpipelinebynumberactor.md)               | :heavy_check_mark:                                                                                              | The user who triggered the Pipeline.                                                                            |
| `receivedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | The date and time the trigger was received.                                                                     |
| `type`                                                                                                          | [operations.GetPipelineByNumberPipelineType](../../../sdk/models/operations/getpipelinebynumberpipelinetype.md) | :heavy_check_mark:                                                                                              | The type of trigger.                                                                                            |