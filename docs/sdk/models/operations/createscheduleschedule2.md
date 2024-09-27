# CreateScheduleSchedule2

## Example Usage

```typescript
import { CreateScheduleSchedule2 } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateScheduleSchedule2 = {
  daysOfMonth: [
    648469,
  ],
  hoursOfDay: [
    962171,
  ],
  perHour: 106201,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `daysOfMonth`                                                                                                                       | *number*[]                                                                                                                          | :heavy_check_mark:                                                                                                                  | Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.                                     |
| `daysOfWeek`                                                                                                                        | [operations.CreateScheduleScheduleResponseDaysOfWeek](../../../sdk/models/operations/createschedulescheduleresponsedaysofweek.md)[] | :heavy_minus_sign:                                                                                                                  | Days in a week in which the schedule triggers.                                                                                      |
| `hoursOfDay`                                                                                                                        | *number*[]                                                                                                                          | :heavy_check_mark:                                                                                                                  | Hours in a day in which the schedule triggers.                                                                                      |
| `months`                                                                                                                            | [operations.CreateScheduleScheduleResponseMonths](../../../sdk/models/operations/createschedulescheduleresponsemonths.md)[]         | :heavy_minus_sign:                                                                                                                  | Months in which the schedule triggers.                                                                                              |
| `perHour`                                                                                                                           | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Number of times a schedule triggers per hour, value must be between 1 and 60                                                        |