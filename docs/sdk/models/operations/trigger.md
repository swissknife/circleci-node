# Trigger

A summary of the trigger.

## Example Usage

```typescript
import { Trigger } from "circleci-v2-sdk/sdk/models/operations";

let value: Trigger = {
  actor: {
    avatarUrl: "<value>",
    login: "Jacynthe_Beier94",
  },
  receivedAt: new Date("2024-03-10T15:41:52.150Z"),
  type: "api",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `actor`                                                                                                 | [operations.Actor](../../../sdk/models/operations/actor.md)                                             | :heavy_check_mark:                                                                                      | The user who triggered the Pipeline.                                                                    |
| `receivedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | The date and time the trigger was received.                                                             |
| `type`                                                                                                  | [operations.GetPipelineByIdPipelineType](../../../sdk/models/operations/getpipelinebyidpipelinetype.md) | :heavy_check_mark:                                                                                      | The type of trigger.                                                                                    |