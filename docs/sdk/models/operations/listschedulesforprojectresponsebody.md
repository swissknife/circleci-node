# ListSchedulesForProjectResponseBody

A sequence of schedules

## Example Usage

```typescript
import { ListSchedulesForProjectResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectResponseBody = {
  items: [
    {
      actor: {
        id: "47d7f806-b3b8-40c8-8174-e4f85db6acdd",
        login: "Rhiannon_Dooley",
        name: "<value>",
      },
      createdAt: new Date("2022-12-04T12:43:46.364Z"),
      description: "Managed dynamic analyzer",
      id: "8f94f6ba-fe21-4ce7-9b13-29304a95d448",
      name: "<value>",
      parameters: {
        "deploy_prod": true,
        "branch": "feature/design-new-api",
      },
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      timetable: {
        daysOfWeek: [
          "SAT",
        ],
        hoursOfDay: [
          504646,
        ],
        perHour: 259019,
      },
      updatedAt: new Date("2023-03-06T19:53:58.677Z"),
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