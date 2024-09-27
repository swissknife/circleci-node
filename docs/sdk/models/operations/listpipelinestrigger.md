# ListPipelinesTrigger

A summary of the trigger.

## Example Usage

```typescript
import { ListPipelinesTrigger } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesTrigger = {
  actor: {
    avatarUrl: "https://querulous-allegation.info/",
    login: "Marjorie_Cormier",
  },
  receivedAt: new Date("2023-10-03T18:29:29.401Z"),
  type: "scheduled_pipeline",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `actor`                                                                                             | [operations.ListPipelinesActor](../../../sdk/models/operations/listpipelinesactor.md)               | :heavy_check_mark:                                                                                  | The user who triggered the Pipeline.                                                                |
| `receivedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | The date and time the trigger was received.                                                         |
| `type`                                                                                              | [operations.ListPipelinesPipelineType](../../../sdk/models/operations/listpipelinespipelinetype.md) | :heavy_check_mark:                                                                                  | The type of trigger.                                                                                |