# ListSchedulesForProjectResponse


## Supported Types

### `operations.ListSchedulesForProjectResponseBody`

```typescript
const value: operations.ListSchedulesForProjectResponseBody = {
  items: [
    {
      actor: {
        id: "a060d2a4-2e9e-44df-a6e5-5ff3d5fde943",
        login: "Margaret_Dach43",
        name: "<value>",
      },
      createdAt: new Date("2023-08-30T01:07:14.865Z"),
      description: "that ack innovation and shark",
      id: "a23d5760-b8a4-4636-bafa-861729bf462e",
      name: "<value>",
      parameters: {
        "deploy_prod": true,
        "branch": "feature/design-new-api",
      },
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      timetable: {
        daysOfMonth: [
          57290,
        ],
        hoursOfDay: [
          556719,
        ],
        perHour: 235013,
      },
      updatedAt: new Date("2022-05-12T04:11:57.892Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

### `operations.ListSchedulesForProjectScheduleResponseBody`

```typescript
const value: operations.ListSchedulesForProjectScheduleResponseBody = {};
```

