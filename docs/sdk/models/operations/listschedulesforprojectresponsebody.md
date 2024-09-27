# ListSchedulesForProjectResponseBody

A sequence of schedules

## Example Usage

```typescript
import { ListSchedulesForProjectResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectResponseBody = {
  items: [
    {
      actor: {
        id: "80f80a41-d310-4ba0-83b2-937d4a715dfd",
        login: "Ezekiel_Lueilwitz77",
        name: "<value>",
      },
      createdAt: new Date("2023-01-11T06:39:44.285Z"),
      description: "zowie given wherever jealously uh-huh consequently",
      id: "b6c905cb-aa9a-498c-9576-35056133352b",
      name: "<value>",
      parameters: {
        "deploy_prod": true,
        "branch": "feature/design-new-api",
      },
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      timetable: {
        daysOfWeek: [
          "THU",
        ],
        hoursOfDay: [
          179648,
        ],
        perHour: 58056,
      },
      updatedAt: new Date("2022-06-28T23:14:11.413Z"),
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