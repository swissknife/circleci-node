# ListPipelinesTrigger

A summary of the trigger.

## Example Usage

```typescript
import { ListPipelinesTrigger } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesTrigger = {
  actor: {
    avatarUrl: "https://artistic-lawmaker.name",
    login: "Eusebio.Fay",
  },
  receivedAt: new Date("2025-03-02T17:47:11.428Z"),
  type: "explicit",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `actor`                                                                                             | [operations.ListPipelinesActor](../../../sdk/models/operations/listpipelinesactor.md)               | :heavy_check_mark:                                                                                  | The user who triggered the Pipeline.                                                                |
| `receivedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | The date and time the trigger was received.                                                         |
| `type`                                                                                              | [operations.ListPipelinesPipelineType](../../../sdk/models/operations/listpipelinespipelinetype.md) | :heavy_check_mark:                                                                                  | The type of trigger.                                                                                |