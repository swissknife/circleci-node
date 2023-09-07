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
    description: "esse",
    name: "Sheldon Boehm",
    parameters: {
      "nam": "vero",
    },
    timetable: {
      daysOfMonth: [
        93459,
      ],
      daysOfWeek: [
        CreateScheduleCreateScheduleParametersTimetable1DaysOfWeek.Fri,
      ],
      hoursOfDay: [
        426306,
      ],
      months: [
        CreateScheduleCreateScheduleParametersTimetable1Months.Sep,
      ],
      perHour: 473221,
    },
  },
  projectSlug: "rerum",
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
  scheduleId: "95bc0ab3-c20c-44f3-b89f-d871f99dd2ef",
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
  scheduleId: "d121aa6f-1e67-44bd-b04f-15756082d68e",
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
  pageToken: "dolorum",
  projectSlug: "architecto",
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
    description: "omnis",
    name: "Ms. Roger Strosin II",
    parameters: {
      "veritatis": "consectetur",
    },
    timetable: {
      daysOfMonth: [
        237173,
      ],
      daysOfWeek: [
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Thu,
      ],
      hoursOfDay: [
        839513,
      ],
      months: [
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Mar,
      ],
      perHour: 522371,
    },
  },
  scheduleId: "086a1840-394c-4260-b1f9-3f5f0642dac7",
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

