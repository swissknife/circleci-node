# ListPipelinesForProjectTrigger

A summary of the trigger.

## Example Usage

```typescript
import { ListPipelinesForProjectTrigger } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesForProjectTrigger = {
    actor: {
        avatarUrl: "<value>",
        login: "Christop.Feeney12",
    },
    receivedAt: new Date("2023-01-19T22:57:13.583Z"),
    type: "explicit",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `actor`                                                                                                                 | [operations.ListPipelinesForProjectActor](../../../sdk/models/operations/listpipelinesforprojectactor.md)               | :heavy_check_mark:                                                                                                      | The user who triggered the Pipeline.                                                                                    |
| `receivedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | The date and time the trigger was received.                                                                             |
| `type`                                                                                                                  | [operations.ListPipelinesForProjectPipelineType](../../../sdk/models/operations/listpipelinesforprojectpipelinetype.md) | :heavy_check_mark:                                                                                                      | The type of trigger.                                                                                                    |