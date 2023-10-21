# Schedule
(*schedule*)

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
import { CreateScheduleCreateScheduleParametersAttributionActor } from "circleci-v2-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.schedule.createSchedule({
    requestBody: {
      attributionActor: CreateScheduleCreateScheduleParametersAttributionActor.Current,
      name: "string",
      parameters: {
        "deploy_prod": "string",
        "branch": "string",
      },
      timetable: "string",
    },
    projectSlug: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.schedule.deleteScheduleById({
    scheduleId: "d61435f8-c8fd-4d1b-8e96-b194177e1b46",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.schedule.getScheduleById({
    scheduleId: "89f339bb-2346-462d-b60a-cb48dec1fc3b",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.schedule.listSchedulesForProject({
    projectSlug: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
  UpdateScheduleUpdateScheduleParametersAttributionActor,
  UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek,
  UpdateScheduleUpdateScheduleParametersTimetableMonths,
} from "circleci-v2-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.schedule.updateSchedule({
    requestBody: {
      attributionActor: UpdateScheduleUpdateScheduleParametersAttributionActor.Current,
      parameters: {
        "deploy_prod": "string",
        "branch": "string",
      },
      timetable: {
        daysOfMonth: [
          422422,
        ],
        daysOfWeek: [
          UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Wed,
        ],
        hoursOfDay: [
          565089,
        ],
        months: [
          UpdateScheduleUpdateScheduleParametersTimetableMonths.Aug,
        ],
      },
    },
    scheduleId: "15e60e97-e640-494d-be9a-b9ea99c1416e",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateScheduleRequest](../../models/operations/updateschedulerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateScheduleResponse](../../models/operations/updatescheduleresponse.md)>**

