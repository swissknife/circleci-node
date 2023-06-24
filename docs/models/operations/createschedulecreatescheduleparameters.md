# CreateScheduleCreateScheduleParameters

The parameters for a create schedule request


## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributionActor`                                                                                                                          | [CreateScheduleCreateScheduleParametersAttributionActor](../../models/operations/createschedulecreatescheduleparametersattributionactor.md) | :heavy_check_mark:                                                                                                                          | The attribution-actor of the scheduled pipeline.                                                                                            | current                                                                                                                                     |
| `description`                                                                                                                               | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Description of the schedule.                                                                                                                |                                                                                                                                             |
| `name`                                                                                                                                      | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Name of the schedule.                                                                                                                       |                                                                                                                                             |
| `parameters`                                                                                                                                | Record<string, *any*>                                                                                                                       | :heavy_check_mark:                                                                                                                          | Pipeline parameters represented as key-value pairs. Must contain branch or tag.                                                             |                                                                                                                                             |
| `timetable`                                                                                                                                 | *any*                                                                                                                                       | :heavy_check_mark:                                                                                                                          | Timetable that specifies when a schedule triggers.                                                                                          |                                                                                                                                             |