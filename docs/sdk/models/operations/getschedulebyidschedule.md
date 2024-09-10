# GetScheduleByIdSchedule

A schedule response

## Example Usage

```typescript
import { GetScheduleByIdSchedule } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdSchedule = {
  actor: {
    id: "d0af2dfe-13db-44f6-acba-3f8941aebc0b",
    login: "Katherine.Becker",
    name: "<value>",
  },
  createdAt: new Date("2023-09-18T04:25:03.089Z"),
  description: "De-engineered didactic secured line",
  id: "3b2ecfcc-8f89-4501-8f5d-d3d6fa1804e5",
  name: "<value>",
  parameters: {
    "deploy_prod": true,
    "branch": "feature/design-new-api",
  },
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  timetable: {
    daysOfWeek: [
      "WED",
    ],
    hoursOfDay: [
      557987,
    ],
    perHour: 162450,
  },
  updatedAt: new Date("2024-12-12T18:13:48.672Z"),
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