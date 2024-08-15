# GetScheduleByIdSchedule

A schedule response

## Example Usage

```typescript
import { GetScheduleByIdSchedule } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdSchedule = {
    actor: {
        id: "ba3f8941-aebc-40b8-8a69-24d3b2ecfcc8",
        login: "Zander.Lemke",
        name: "<value>",
    },
    createdAt: new Date("2022-02-10T16:39:25.751Z"),
    description: "Centralized 24/7 website",
    id: "5dd3d6fa-1804-4e54-882f-168a363c8873",
    name: "<value>",
    parameters: {
        deploy_prod: true,
        branch: "feature/design-new-api",
    },
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    timetable: {
        daysOfMonth: [271306],
        hoursOfDay: [503449],
        perHour: 258059,
    },
    updatedAt: new Date("2022-08-04T05:25:32.066Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actor`                                                                                       | [operations.GetScheduleByIdUser](../../../sdk/models/operations/getschedulebyiduser.md)       | :heavy_check_mark:                                                                            | The attribution actor who will run the scheduled pipeline.                                    |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the pipeline was created.                                                   |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Description of the schedule.                                                                  |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the schedule.                                                                |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the schedule.                                                                         |                                                                                               |
| `parameters`                                                                                  | Record<string, *operations.GetScheduleByIdParameters*>                                        | :heavy_check_mark:                                                                            | Pipeline parameters represented as key-value pairs. Must contain branch or tag.               | {<br/>"deploy_prod": true,<br/>"branch": "feature/design-new-api"<br/>}                       |
| `projectSlug`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project-slug for the schedule                                                             | gh/CircleCI-Public/api-preview-docs                                                           |
| `timetable`                                                                                   | *operations.GetScheduleByIdTimetable*                                                         | :heavy_check_mark:                                                                            | Timetable that specifies when a schedule triggers.                                            |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the pipeline was last updated.                                              |                                                                                               |