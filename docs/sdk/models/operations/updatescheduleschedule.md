# UpdateScheduleSchedule

A schedule response

## Example Usage

```typescript
import { UpdateScheduleSchedule } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleSchedule = {
    actor: {
        id: "c364b7c1-5dfb-4ace-988b-1c4ee2c8c6ce",
        login: "Gunnar98",
        name: "<value>",
    },
    createdAt: new Date("2024-10-17T05:47:22.107Z"),
    description: "Synergized neutral approach",
    id: "c7cbdb6e-ec74-4378-ba25-317747dc915a",
    name: "<value>",
    parameters: {
        deploy_prod: true,
        branch: "feature/design-new-api",
    },
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    timetable: {
        daysOfMonth: [147989],
        hoursOfDay: [804879],
        perHour: 681115,
    },
    updatedAt: new Date("2024-12-30T04:43:36.340Z"),
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