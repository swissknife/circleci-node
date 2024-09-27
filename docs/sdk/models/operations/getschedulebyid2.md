# GetScheduleById2

## Example Usage

```typescript
import { GetScheduleById2 } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleById2 = {
  daysOfMonth: [
    476604,
  ],
  hoursOfDay: [
    937294,
  ],
  perHour: 933600,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `daysOfMonth`                                                                                                         | *number*[]                                                                                                            | :heavy_check_mark:                                                                                                    | Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.                       |
| `daysOfWeek`                                                                                                          | [operations.GetScheduleByIdScheduleDaysOfWeek](../../../sdk/models/operations/getschedulebyidscheduledaysofweek.md)[] | :heavy_minus_sign:                                                                                                    | Days in a week in which the schedule triggers.                                                                        |
| `hoursOfDay`                                                                                                          | *number*[]                                                                                                            | :heavy_check_mark:                                                                                                    | Hours in a day in which the schedule triggers.                                                                        |
| `months`                                                                                                              | [operations.GetScheduleByIdScheduleMonths](../../../sdk/models/operations/getschedulebyidschedulemonths.md)[]         | :heavy_minus_sign:                                                                                                    | Months in which the schedule triggers.                                                                                |
| `perHour`                                                                                                             | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | Number of times a schedule triggers per hour, value must be between 1 and 60                                          |