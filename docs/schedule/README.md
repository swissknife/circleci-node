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
    description: "in",
    name: "Jeannette Stanton II",
    parameters: {
      "dicta": "ullam",
      "reprehenderit": "ullam",
      "nisi": "aut",
      "voluptatum": "qui",
    },
    timetable: {
      daysOfMonth: [
        536275,
        929292,
      ],
      daysOfWeek: [
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Tue,
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Thu,
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Fri,
      ],
      hoursOfDay: [
        869489,
      ],
      months: [
        CreateScheduleCreateScheduleParametersTimetable2Months.Oct,
      ],
      perHour: 55965,
    },
  },
  projectSlug: "minima",
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
  scheduleId: "1339d080-86a1-4840-b94c-26071f93f5f0",
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
  scheduleId: "642dac7a-f515-4cc4-93aa-63aae8d67864",
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
  pageToken: "possimus",
  projectSlug: "facilis",
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
    description: "cum",
    name: "Pearl Hessel",
    parameters: {
      "recusandae": "aliquid",
      "aperiam": "cum",
    },
    timetable: {
      daysOfMonth: [
        449083,
      ],
      daysOfWeek: [
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Fri,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Wed,
      ],
      hoursOfDay: [
        985492,
        381760,
      ],
      months: [
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Sep,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Jan,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Jan,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Jun,
      ],
      perHour: 121059,
    },
  },
  scheduleId: "f33317fe-35b6-40eb-9ea4-26555ba3c287",
}).then((res: UpdateScheduleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
