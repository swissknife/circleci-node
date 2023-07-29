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
    apiKeyHeader: "",
  },
});

sdk.schedule.createSchedule({
  requestBody: {
    attributionActor: CreateScheduleCreateScheduleParametersAttributionActor.Current,
    description: "minima",
    name: "Guillermo Balistreri",
    parameters: {
      "cumque": "consequuntur",
    },
    timetable: {
      daysOfMonth: [
        308286,
        959167,
        232865,
        458139,
      ],
      daysOfWeek: [
        CreateScheduleCreateScheduleParametersTimetable1DaysOfWeek.Thu,
        CreateScheduleCreateScheduleParametersTimetable1DaysOfWeek.Fri,
        CreateScheduleCreateScheduleParametersTimetable1DaysOfWeek.Fri,
      ],
      hoursOfDay: [
        457223,
        97468,
        951875,
      ],
      months: [
        CreateScheduleCreateScheduleParametersTimetable1Months.Feb,
        CreateScheduleCreateScheduleParametersTimetable1Months.Jan,
        CreateScheduleCreateScheduleParametersTimetable1Months.Aug,
      ],
      perHour: 157632,
    },
  },
  projectSlug: "eveniet",
}).then((res: CreateScheduleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateScheduleRequest](../../models/operations/createschedulerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateScheduleResponse](../../models/operations/createscheduleresponse.md)>**


## deleteScheduleById

Deletes the schedule by id.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteScheduleByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.schedule.deleteScheduleById({
  scheduleId: "fd121aa6-f1e6-474b-9b04-f15756082d68",
}).then((res: DeleteScheduleByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteScheduleByIdRequest](../../models/operations/deleteschedulebyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteScheduleByIdResponse](../../models/operations/deleteschedulebyidresponse.md)>**


## getScheduleById

Get a schedule by id.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetScheduleByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.schedule.getScheduleById({
  scheduleId: "ea19f1d1-7051-4339-9080-86a1840394c2",
}).then((res: GetScheduleByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetScheduleByIdRequest](../../models/operations/getschedulebyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetScheduleByIdResponse](../../models/operations/getschedulebyidresponse.md)>**


## listSchedulesForProject

Returns all schedules for this project.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListSchedulesForProjectResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.schedule.listSchedulesForProject({
  pageToken: "voluptas",
  projectSlug: "aut",
}).then((res: ListSchedulesForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListSchedulesForProjectRequest](../../models/operations/listschedulesforprojectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListSchedulesForProjectResponse](../../models/operations/listschedulesforprojectresponse.md)>**


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
    apiKeyHeader: "",
  },
});

sdk.schedule.updateSchedule({
  requestBody: {
    attributionActor: UpdateScheduleUpdateScheduleParametersAttributionActor.Current,
    description: "dignissimos",
    name: "Elisa Mosciski",
    parameters: {
      "asperiores": "aperiam",
      "ea": "quaerat",
    },
    timetable: {
      daysOfMonth: [
        831520,
      ],
      daysOfWeek: [
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Wed,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Mon,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Thu,
      ],
      hoursOfDay: [
        368102,
        65304,
        312753,
        783235,
      ],
      months: [
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Jun,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Mar,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Dec,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Sep,
      ],
      perHour: 662505,
    },
  },
  scheduleId: "63aae8d6-7864-4dbb-a75f-d5e60b375ed4",
}).then((res: UpdateScheduleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateScheduleRequest](../../models/operations/updateschedulerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateScheduleResponse](../../models/operations/updatescheduleresponse.md)>**

