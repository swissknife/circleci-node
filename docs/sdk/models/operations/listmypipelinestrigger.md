# ListMyPipelinesTrigger

A summary of the trigger.

## Example Usage

```typescript
import { ListMyPipelinesTrigger } from "circleci-v2-sdk/sdk/models/operations";

let value: ListMyPipelinesTrigger = {
  actor: {
    avatarUrl: "<value>",
    login: "Randall.Ledner60",
  },
  receivedAt: new Date("2023-09-25T16:52:43.387Z"),
  type: "scheduled_pipeline",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `actor`                                                                                                 | [operations.ListMyPipelinesActor](../../../sdk/models/operations/listmypipelinesactor.md)               | :heavy_check_mark:                                                                                      | The user who triggered the Pipeline.                                                                    |
| `receivedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | The date and time the trigger was received.                                                             |
| `type`                                                                                                  | [operations.ListMyPipelinesPipelineType](../../../sdk/models/operations/listmypipelinespipelinetype.md) | :heavy_check_mark:                                                                                      | The type of trigger.                                                                                    |