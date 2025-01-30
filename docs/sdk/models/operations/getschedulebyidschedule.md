# GetScheduleByIdSchedule

A schedule response

## Example Usage

```typescript
import { GetScheduleByIdSchedule } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdSchedule = {
  actor: {
    id: "16e2d07a-09f2-4b92-b008-fab792ecf432",
    login: "Oscar.Lueilwitz15",
    name: "<value>",
  },
  createdAt: new Date("2025-11-21T23:06:53.071Z"),
  description: "cap seemingly deep from supposing",
  id: "49226642-0047-4b7e-b025-9d540d69f02c",
  name: "<value>",
  parameters: {
    "deploy_prod": true,
    "branch": "feature/design-new-api",
  },
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  timetable: {
    daysOfMonth: [
      536999,
    ],
    hoursOfDay: [
      978857,
    ],
    perHour: 396184,
  },
  updatedAt: new Date("2024-10-21T17:31:37.327Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actor`                                                                                       | [operations.User](../../../sdk/models/operations/user.md)                                     | :heavy_check_mark:                                                                            | The attribution actor who will run the scheduled pipeline.                                    |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the pipeline was created.                                                   |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Description of the schedule.                                                                  |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the schedule.                                                                |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the schedule.                                                                         |                                                                                               |
| `parameters`                                                                                  | Record<string, *operations.GetScheduleByIdParameters*>                                        | :heavy_check_mark:                                                                            | Pipeline parameters represented as key-value pairs. Must contain branch or tag.               | {<br/>"deploy_prod": true,<br/>"branch": "feature/design-new-api"<br/>}                       |
| `projectSlug`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project-slug for the schedule                                                             | gh/CircleCI-Public/api-preview-docs                                                           |
| `timetable`                                                                                   | *operations.GetScheduleByIdTimetable*                                                         | :heavy_check_mark:                                                                            | Timetable that specifies when a schedule triggers.                                            |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the pipeline was last updated.                                              |                                                                                               |