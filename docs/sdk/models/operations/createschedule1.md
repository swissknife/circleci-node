# CreateSchedule1

## Example Usage

```typescript
import { CreateSchedule1 } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateSchedule1 = {
  daysOfWeek: [
    "THU",
  ],
  hoursOfDay: [
    761437,
  ],
  perHour: 2064,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `daysOfMonth`                                                                                   | *number*[]                                                                                      | :heavy_minus_sign:                                                                              | Days in a month in which the schedule triggers. This is mutually exclusive with days in a week. |
| `daysOfWeek`                                                                                    | [operations.DaysOfWeek](../../../sdk/models/operations/daysofweek.md)[]                         | :heavy_check_mark:                                                                              | Days in a week in which the schedule triggers.                                                  |
| `hoursOfDay`                                                                                    | *number*[]                                                                                      | :heavy_check_mark:                                                                              | Hours in a day in which the schedule triggers.                                                  |
| `months`                                                                                        | [operations.Months](../../../sdk/models/operations/months.md)[]                                 | :heavy_minus_sign:                                                                              | Months in which the schedule triggers.                                                          |
| `perHour`                                                                                       | *number*                                                                                        | :heavy_check_mark:                                                                              | Number of times a schedule triggers per hour, value must be between 1 and 60                    |