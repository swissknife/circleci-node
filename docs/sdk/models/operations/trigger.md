# Trigger

A summary of the trigger.


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actor`                                                                                       | [operations.Actor](../../../sdk/models/operations/actor.md)                                   | :heavy_check_mark:                                                                            | The user who triggered the Pipeline.                                                          |
| `receivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the trigger was received.                                                   |
| `type`                                                                                        | [operations.GetPipelineByIdType](../../../sdk/models/operations/getpipelinebyidtype.md)       | :heavy_check_mark:                                                                            | The type of trigger.                                                                          |