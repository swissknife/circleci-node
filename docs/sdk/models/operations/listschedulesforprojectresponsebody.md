# ListSchedulesForProjectResponseBody

A sequence of schedules

## Example Usage

```typescript
import { ListSchedulesForProjectResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectResponseBody = {
  items: [
    {
      actor: {
        id: "dfd25d8c-c157-4fe6-9168-e44a8327ccf6",
        login: "Abbigail47",
        name: "<value>",
      },
      createdAt: new Date("2022-02-01T21:48:33.617Z"),
      description: "er jiggle beyond",
      id: "cbaa9a98-c576-4350-9561-33352b519202",
      name: "<value>",
      parameters: {
        "deploy_prod": true,
        "branch": "feature/design-new-api",
      },
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      timetable: {
        daysOfMonth: [
          641501,
        ],
        hoursOfDay: [
          5205,
        ],
        perHour: 793291,
      },
      updatedAt: new Date("2023-01-03T21:55:52.769Z"),
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