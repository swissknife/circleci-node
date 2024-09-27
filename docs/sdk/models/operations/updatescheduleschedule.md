# UpdateScheduleSchedule

A schedule response

## Example Usage

```typescript
import { UpdateScheduleSchedule } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleSchedule = {
  actor: {
    id: "47b85282-f82b-41c7-a20f-4f881fb81265",
    login: "Arden.Langosh",
    name: "<value>",
  },
  createdAt: new Date("2022-03-09T17:02:11.941Z"),
  description: "sonar availability even which filthy ah",
  id: "31a8300b-3402-4d3f-924d-64b0ed1cf79a",
  name: "<value>",
  parameters: {
    "deploy_prod": true,
    "branch": "feature/design-new-api",
  },
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  timetable: {
    daysOfMonth: [
      474867,
    ],
    hoursOfDay: [
      405542,
    ],
    perHour: 902802,
  },
  updatedAt: new Date("2024-05-24T12:02:36.255Z"),
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