# CreateSchedule2

## Example Usage

```typescript
import { CreateSchedule2 } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateSchedule2 = {
  daysOfMonth: [
    823753,
  ],
  hoursOfDay: [
    603323,
  ],
  perHour: 275425,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `daysOfMonth`                                                                                       | *number*[]                                                                                          | :heavy_check_mark:                                                                                  | Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.     |
| `daysOfWeek`                                                                                        | [operations.CreateScheduleDaysOfWeek](../../../sdk/models/operations/createscheduledaysofweek.md)[] | :heavy_minus_sign:                                                                                  | Days in a week in which the schedule triggers.                                                      |
| `hoursOfDay`                                                                                        | *number*[]                                                                                          | :heavy_check_mark:                                                                                  | Hours in a day in which the schedule triggers.                                                      |
| `months`                                                                                            | [operations.CreateScheduleMonths](../../../sdk/models/operations/createschedulemonths.md)[]         | :heavy_minus_sign:                                                                                  | Months in which the schedule triggers.                                                              |
| `perHour`                                                                                           | *number*                                                                                            | :heavy_check_mark:                                                                                  | Number of times a schedule triggers per hour, value must be between 1 and 60                        |