# ListSchedulesForProjectResponse

## Example Usage

```typescript
import { ListSchedulesForProjectResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectResponse = {
  items: [
    {
      actor: {
        id: "4147d7f8-06b3-4b80-bc81-74e4f85db6ac",
        login: "Raymundo.Shields",
        name: "<value>",
      },
      createdAt: new Date("2022-05-06T16:52:19.881Z"),
      description: "Phased dynamic hardware",
      id: "518f94f6-bafe-421c-9e7b-1329304a95d4",
      name: "<value>",
      parameters: {
        "deploy_prod": true,
        "branch": "feature/design-new-api",
      },
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      timetable: {
        daysOfMonth: [
          478216,
        ],
        hoursOfDay: [
          445973,
        ],
        perHour: 155785,
      },
      updatedAt: new Date("2023-07-08T02:12:48.329Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `operations.ListSchedulesForProjectResponseBody`

```typescript
const value: operations.ListSchedulesForProjectResponseBody = /* values here */
```

### `operations.ListSchedulesForProjectScheduleResponseBody`

```typescript
const value: operations.ListSchedulesForProjectScheduleResponseBody = /* values here */
```

