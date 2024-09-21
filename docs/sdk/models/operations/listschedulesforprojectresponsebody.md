# ListSchedulesForProjectResponseBody

A sequence of schedules

## Example Usage

```typescript
import { ListSchedulesForProjectResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectResponseBody = {
  items: [
    {
      actor: {
        id: "b75e506c-af1e-4576-913b-020d92cfee09",
        login: "Kendrick49",
        name: "<value>",
      },
      createdAt: new Date("2022-02-16T10:58:15.255Z"),
      description: "Front-line system-worthy monitoring",
      id: "dac73c92-cf54-41af-8271-0ad5e13e8902",
      name: "<value>",
      parameters: {
        "deploy_prod": true,
        "branch": "feature/design-new-api",
      },
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      timetable: {
        daysOfMonth: [
          134795,
        ],
        hoursOfDay: [
          849673,
        ],
        perHour: 351035,
      },
      updatedAt: new Date("2024-05-27T10:54:59.560Z"),
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