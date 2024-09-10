# ListSchedulesForProject2

## Example Usage

```typescript
import { ListSchedulesForProject2 } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProject2 = {
  daysOfMonth: [
    168142,
  ],
  hoursOfDay: [
    62130,
  ],
  perHour: 556133,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `daysOfMonth`                                                                                                                         | *number*[]                                                                                                                            | :heavy_check_mark:                                                                                                                    | Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.                                       |
| `daysOfWeek`                                                                                                                          | [operations.ListSchedulesForProjectScheduleDaysOfWeek](../../../sdk/models/operations/listschedulesforprojectscheduledaysofweek.md)[] | :heavy_minus_sign:                                                                                                                    | Days in a week in which the schedule triggers.                                                                                        |
| `hoursOfDay`                                                                                                                          | *number*[]                                                                                                                            | :heavy_check_mark:                                                                                                                    | Hours in a day in which the schedule triggers.                                                                                        |
| `months`                                                                                                                              | [operations.ListSchedulesForProjectScheduleMonths](../../../sdk/models/operations/listschedulesforprojectschedulemonths.md)[]         | :heavy_minus_sign:                                                                                                                    | Months in which the schedule triggers.                                                                                                |
| `perHour`                                                                                                                             | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Number of times a schedule triggers per hour, value must be between 1 and 60                                                          |