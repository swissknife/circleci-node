# UpdateSchedule2

## Example Usage

```typescript
import { UpdateSchedule2 } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateSchedule2 = {
    daysOfMonth: [980467],
    hoursOfDay: [485795],
    perHour: 588662,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `daysOfMonth`                                                                                                                       | *number*[]                                                                                                                          | :heavy_check_mark:                                                                                                                  | Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.                                     |
| `daysOfWeek`                                                                                                                        | [operations.UpdateScheduleScheduleResponseDaysOfWeek](../../../sdk/models/operations/updateschedulescheduleresponsedaysofweek.md)[] | :heavy_minus_sign:                                                                                                                  | Days in a week in which the schedule triggers.                                                                                      |
| `hoursOfDay`                                                                                                                        | *number*[]                                                                                                                          | :heavy_check_mark:                                                                                                                  | Hours in a day in which the schedule triggers.                                                                                      |
| `months`                                                                                                                            | [operations.UpdateScheduleScheduleResponseMonths](../../../sdk/models/operations/updateschedulescheduleresponsemonths.md)[]         | :heavy_minus_sign:                                                                                                                  | Months in which the schedule triggers.                                                                                              |
| `perHour`                                                                                                                           | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Number of times a schedule triggers per hour, value must be between 1 and 60                                                        |