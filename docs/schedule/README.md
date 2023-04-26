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
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  CreateScheduleCreateScheduleParametersAttributionActorEnum,
  CreateScheduleCreateScheduleParametersTimetable1DaysOfWeekEnum,
  CreateScheduleCreateScheduleParametersTimetable1MonthsEnum,
  CreateScheduleCreateScheduleParametersTimetable2DaysOfWeekEnum,
  CreateScheduleCreateScheduleParametersTimetable2MonthsEnum,
  CreateScheduleRequest,
  CreateScheduleResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateScheduleRequest = {
  requestBody: {
    attributionActor: CreateScheduleCreateScheduleParametersAttributionActorEnum.Current,
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
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeekEnum.Sat,
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeekEnum.Fri,
      ],
      hoursOfDay: [
        471752,
        25662,
        711584,
      ],
      months: [
        CreateScheduleCreateScheduleParametersTimetable2MonthsEnum.Nov,
      ],
      perHour: 424685,
    },
  },
  projectSlug: "libero",
};

sdk.schedule.createSchedule(req).then((res: CreateScheduleResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteScheduleById

Deletes the schedule by id.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { DeleteScheduleByIdRequest, DeleteScheduleByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteScheduleByIdRequest = {
  scheduleId: "5a73429c-db1a-4842-abb6-79d2322715bf",
};

sdk.schedule.deleteScheduleById(req).then((res: DeleteScheduleByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getScheduleById

Get a schedule by id.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetScheduleByIdRequest, GetScheduleByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetScheduleByIdRequest = {
  scheduleId: "0cbb1e31-b8b9-40f3-843a-1108e0adcf4b",
};

sdk.schedule.getScheduleById(req).then((res: GetScheduleByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listSchedulesForProject

Returns all schedules for this project.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { ListSchedulesForProjectRequest, ListSchedulesForProjectResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListSchedulesForProjectRequest = {
  pageToken: "cupiditate",
  projectSlug: "qui",
};

sdk.schedule.listSchedulesForProject(req).then((res: ListSchedulesForProjectResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateSchedule

Updates a schedule and returns the updated schedule.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  UpdateScheduleRequest,
  UpdateScheduleResponse,
  UpdateScheduleUpdateScheduleParametersAttributionActorEnum,
  UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeekEnum,
  UpdateScheduleUpdateScheduleParametersTimetableMonthsEnum,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateScheduleRequest = {
  requestBody: {
    attributionActor: UpdateScheduleUpdateScheduleParametersAttributionActorEnum.Current,
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
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeekEnum.Mon,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeekEnum.Thu,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeekEnum.Thu,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeekEnum.Fri,
      ],
      hoursOfDay: [
        293020,
        844550,
      ],
      months: [
        UpdateScheduleUpdateScheduleParametersTimetableMonthsEnum.Dec,
        UpdateScheduleUpdateScheduleParametersTimetableMonthsEnum.Apr,
        UpdateScheduleUpdateScheduleParametersTimetableMonthsEnum.Aug,
        UpdateScheduleUpdateScheduleParametersTimetableMonthsEnum.Mar,
      ],
      perHour: 974259,
    },
  },
  scheduleId: "5d2cff7c-70a4-4562-ad43-6813f16d9f5f",
};

sdk.schedule.updateSchedule(req).then((res: UpdateScheduleResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
