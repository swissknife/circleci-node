# ListSchedulesForProjectResponseBody

A sequence of schedules

## Example Usage

```typescript
import { ListSchedulesForProjectResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectResponseBody = {
  items: [
    {
      actor: {
        id: "f77a87ee-3e4b-4e75-ac65-b34418e3bb91",
        login: "Pearl_Lueilwitz48",
        name: "<value>",
      },
      createdAt: new Date("2022-12-12T23:24:28.439Z"),
      description: "Team-oriented 5th generation synergy",
      id: "8419d8f8-4f14-44f3-a07e-dcc4aa5f3cab",
      name: "<value>",
      parameters: {
        "deploy_prod": true,
        "branch": "feature/design-new-api",
      },
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      timetable: {
        daysOfMonth: [
          607624,
        ],
        hoursOfDay: [
          16252,
        ],
        perHour: 369941,
      },
      updatedAt: new Date("2023-12-06T12:18:00.126Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Schedule](../../../sdk/models/operations/schedule.md)[]                   | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |