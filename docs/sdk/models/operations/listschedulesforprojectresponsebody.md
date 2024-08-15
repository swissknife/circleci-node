# ListSchedulesForProjectResponseBody

A sequence of schedules

## Example Usage

```typescript
import { ListSchedulesForProjectResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectResponseBody = {
    items: [
        {
            actor: {
                id: "ee81206e-2813-4fa4-a41c-480d3f2132af",
                login: "Amara4",
                name: "<value>",
            },
            createdAt: new Date("2022-05-28T01:18:12.009Z"),
            description: "Synergistic dynamic approach",
            id: "4f4cc6f1-8bf9-4621-a6a4-f77a87ee3e4b",
            name: "<value>",
            parameters: {
                deploy_prod: true,
                branch: "feature/design-new-api",
            },
            projectSlug: "gh/CircleCI-Public/api-preview-docs",
            timetable: {
                daysOfMonth: [489685],
                hoursOfDay: [373449],
                perHour: 131687,
            },
            updatedAt: new Date("2024-04-25T17:00:41.441Z"),
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