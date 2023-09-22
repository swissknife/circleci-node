# Schedule

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
    description: "aliquam",
    name: "Samuel Hermiston",
    parameters: {
      "nisi": "aut",
    },
    timetable: {
      daysOfMonth: [
        185232,
      ],
      daysOfWeek: [
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Wed,
      ],
      hoursOfDay: [
        401259,
      ],
      months: [
        CreateScheduleCreateScheduleParametersTimetable2Months.Feb,
      ],
      perHour: 929292,
    },
  },
  projectSlug: "dolorum",
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
  scheduleId: "19f1d170-5133-49d0-8086-a1840394c260",
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
  scheduleId: "71f93f5f-0642-4dac-baf5-15cc413aa63a",
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
  pageToken: "est",
  projectSlug: "recusandae",
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
    description: "totam",
    name: "Chester Kuphal",
    parameters: {
      "labore": "possimus",
    },
    timetable: {
      daysOfMonth: [
        706575,
      ],
      daysOfWeek: [
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Wed,
      ],
      hoursOfDay: [
        414857,
      ],
      months: [
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Oct,
      ],
      perHour: 360545,
    },
  },
  scheduleId: "fd5e60b3-75ed-44f6-bbee-41f33317fe35",
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

