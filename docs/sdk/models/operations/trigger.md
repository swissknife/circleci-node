# Trigger

A summary of the trigger.

## Example Usage

```typescript
import { Trigger } from "circleci-v2-sdk/sdk/models/operations";

let value: Trigger = {
    actor: {
        avatarUrl: "<value>",
        login: "Daisy_Carroll",
    },
    receivedAt: new Date("2022-05-03T04:47:32.342Z"),
    type: "explicit",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `actor`                                                                                                 | [operations.Actor](../../../sdk/models/operations/actor.md)                                             | :heavy_check_mark:                                                                                      | The user who triggered the Pipeline.                                                                    |
| `receivedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | The date and time the trigger was received.                                                             |
| `type`                                                                                                  | [operations.GetPipelineByIdPipelineType](../../../sdk/models/operations/getpipelinebyidpipelinetype.md) | :heavy_check_mark:                                                                                      | The type of trigger.                                                                                    |