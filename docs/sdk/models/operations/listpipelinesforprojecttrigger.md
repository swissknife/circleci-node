# ListPipelinesForProjectTrigger

A summary of the trigger.

## Example Usage

```typescript
import { ListPipelinesForProjectTrigger } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesForProjectTrigger = {
  actor: {
    avatarUrl: "https://shimmering-pile.biz",
    login: "Sadye_Lemke-OConner28",
  },
  receivedAt: new Date("2022-12-10T12:12:48.348Z"),
  type: "scheduled_pipeline",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `actor`                                                                                                                 | [operations.ListPipelinesForProjectActor](../../../sdk/models/operations/listpipelinesforprojectactor.md)               | :heavy_check_mark:                                                                                                      | The user who triggered the Pipeline.                                                                                    |
| `receivedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The date and time the trigger was received.                                                                             |
| `type`                                                                                                                  | [operations.ListPipelinesForProjectPipelineType](../../../sdk/models/operations/listpipelinesforprojectpipelinetype.md) | :heavy_check_mark:                                                                                                      | The type of trigger.                                                                                                    |