# GetScheduleByIdSchedule

A schedule response

## Example Usage

```typescript
import { GetScheduleByIdSchedule } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdSchedule = {
  actor: {
    id: "8d00fdb2-7ee0-4c0f-b6f5-45b3d9ff2f00",
    login: "Vince.Kihn",
    name: "<value>",
  },
  createdAt: new Date("2024-04-28T22:11:42.800Z"),
  description: "blindly judicious whoever of cute abaft",
  id: "366ea6f9-5b7e-4e58-a4af-d51f6457ff45",
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
      936059,
    ],
    perHour: 29435,
  },
  updatedAt: new Date("2022-04-21T16:04:48.222Z"),
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