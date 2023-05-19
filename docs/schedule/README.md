# schedule

### Available Operations

* [createSchedule](#createschedule) - Create a schedule
* [deleteScheduleById](#deleteschedulebyid) - Delete a schedule
* [getScheduleById](#getschedulebyid) - Get a schedule
* [listSchedulesForProject](#listschedulesforproject) - Get all schedules
* [updateSchedule](#updateschedule) - Update a schedule

## createSchedule

Creates a schedule and returns the created schedule.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  CreateScheduleCreateScheduleParametersAttributionActor,
  CreateScheduleCreateScheduleParametersTimetable1DaysOfWeek,
  CreateScheduleCreateScheduleParametersTimetable1Months,
  CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek,
  CreateScheduleCreateScheduleParametersTimetable2Months,
  CreateScheduleResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.schedule.createSchedule({
  requestBody: {
    attributionActor: CreateScheduleCreateScheduleParametersAttributionActor.Current,
    description: "similique",
    name: "Cristina Hahn",
    parameters: {
      "officiis": "qui",
      "dolorum": "a",
      "esse": "harum",
      "iusto": "ipsum",
    },
    timetable: {
      daysOfMonth: [
        229442,
        730856,
        880298,
        253941,
      ],
      daysOfWeek: [
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Sat,
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Fri,
      ],
      hoursOfDay: [
        471752,
        25662,
        711584,
      ],
      months: [
        CreateScheduleCreateScheduleParametersTimetable2Months.Nov,
      ],
      perHour: 424685,
    },
  },
  projectSlug: "libero",
}).then((res: CreateScheduleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteScheduleById

Deletes the schedule by id.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteScheduleByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.schedule.deleteScheduleById({
  scheduleId: "5a73429c-db1a-4842-abb6-79d2322715bf",
}).then((res: DeleteScheduleByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getScheduleById

Get a schedule by id.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetScheduleByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.schedule.getScheduleById({
  scheduleId: "0cbb1e31-b8b9-40f3-843a-1108e0adcf4b",
}).then((res: GetScheduleByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listSchedulesForProject

Returns all schedules for this project.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListSchedulesForProjectResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.schedule.listSchedulesForProject({
  pageToken: "cupiditate",
  projectSlug: "qui",
}).then((res: ListSchedulesForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateSchedule

Updates a schedule and returns the updated schedule.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  UpdateScheduleResponse,
  UpdateScheduleUpdateScheduleParametersAttributionActor,
  UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek,
  UpdateScheduleUpdateScheduleParametersTimetableMonths,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.schedule.updateSchedule({
  requestBody: {
    attributionActor: UpdateScheduleUpdateScheduleParametersAttributionActor.Current,
    description: "quae",
    name: "Darren McClure",
    parameters: {
      "omnis": "quis",
      "ipsum": "delectus",
      "voluptate": "consectetur",
      "vero": "tenetur",
    },
    timetable: {
      daysOfMonth: [
        941378,
        715561,
      ],
      daysOfWeek: [
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Mon,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Thu,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Thu,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Fri,
      ],
      hoursOfDay: [
        293020,
        844550,
      ],
      months: [
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Dec,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Apr,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Aug,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Mar,
      ],
      perHour: 974259,
    },
  },
  scheduleId: "5d2cff7c-70a4-4562-ad43-6813f16d9f5f",
}).then((res: UpdateScheduleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
