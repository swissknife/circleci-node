# UpdateScheduleSchedule

A schedule response

## Example Usage

```typescript
import { UpdateScheduleSchedule } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleSchedule = {
    actor: {
        id: "1c4ee2c8-c6ce-4611-beeb-1c7cbdb6eec7",
        login: "Elva_Emmerich",
        name: "<value>",
    },
    createdAt: new Date("2024-02-09T03:46:21.979Z"),
    description: "Profit-focused bi-directional firmware",
    id: "317747dc-915a-4d2c-af5d-d6723dc0f5ae",
    name: "<value>",
    parameters: {
        deploy_prod: true,
        branch: "feature/design-new-api",
    },
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    timetable: {
        daysOfWeek: ["FRI"],
        hoursOfDay: [204373],
        perHour: 640565,
    },
    updatedAt: new Date("2023-02-21T02:36:54.593Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actor`                                                                                       | [operations.UpdateScheduleUser](../../../sdk/models/operations/updatescheduleuser.md)         | :heavy_check_mark:                                                                            | The attribution actor who will run the scheduled pipeline.                                    |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the pipeline was created.                                                   |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Description of the schedule.                                                                  |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the schedule.                                                                |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the schedule.                                                                         |                                                                                               |
| `parameters`                                                                                  | Record<string, *operations.UpdateScheduleScheduleParameters*>                                 | :heavy_check_mark:                                                                            | Pipeline parameters represented as key-value pairs. Must contain branch or tag.               | {<br/>"deploy_prod": true,<br/>"branch": "feature/design-new-api"<br/>}                       |
| `projectSlug`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project-slug for the schedule                                                             | gh/CircleCI-Public/api-preview-docs                                                           |
| `timetable`                                                                                   | *operations.UpdateScheduleScheduleTimetable*                                                  | :heavy_check_mark:                                                                            | Timetable that specifies when a schedule triggers.                                            |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the pipeline was last updated.                                              |                                                                                               |