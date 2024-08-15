# UpdateScheduleUpdateScheduleParameters

The parameters for an update schedule request

## Example Usage

```typescript
import { UpdateScheduleUpdateScheduleParameters } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleUpdateScheduleParameters = {
    attributionActor: "current",
    parameters: {
        deploy_prod: true,
        branch: "feature/design-new-api",
    },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `attributionActor`                                                                                            | [operations.UpdateScheduleAttributionActor](../../../sdk/models/operations/updatescheduleattributionactor.md) | :heavy_minus_sign:                                                                                            | The attribution-actor of the scheduled pipeline.                                                              | current                                                                                                       |
| `description`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Description of the schedule.                                                                                  |                                                                                                               |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Name of the schedule.                                                                                         |                                                                                                               |
| `parameters`                                                                                                  | Record<string, *operations.UpdateScheduleParameters*>                                                         | :heavy_minus_sign:                                                                                            | Pipeline parameters represented as key-value pairs. Must contain branch or tag.                               | {<br/>"deploy_prod": true,<br/>"branch": "feature/design-new-api"<br/>}                                       |
| `timetable`                                                                                                   | [operations.UpdateScheduleTimetable](../../../sdk/models/operations/updatescheduletimetable.md)               | :heavy_minus_sign:                                                                                            | Timetable that specifies when a schedule triggers.                                                            |                                                                                                               |