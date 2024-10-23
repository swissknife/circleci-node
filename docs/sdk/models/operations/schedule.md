# Schedule

A schedule response

## Example Usage

```typescript
import { Schedule } from "circleci-v2-sdk/sdk/models/operations";

let value: Schedule = {
  actor: {
    id: "a92c22c5-5455-4b35-bce9-18a5dc92be4f",
    login: "Elisa.Hackett",
    name: "<value>",
  },
  createdAt: new Date("2023-11-04T22:40:23.273Z"),
  description: "suddenly gee drat phew",
  id: "8a9b1623-380f-480a-b41d-310ba03b2937",
  name: "<value>",
  parameters: {
    "deploy_prod": true,
    "branch": "feature/design-new-api",
  },
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  timetable: {
    daysOfWeek: [
      "THU",
    ],
    hoursOfDay: [
      438281,
    ],
    perHour: 96155,
  },
  updatedAt: new Date("2023-01-31T06:08:34.343Z"),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `actor`                                                                                                 | [operations.ListSchedulesForProjectUser](../../../sdk/models/operations/listschedulesforprojectuser.md) | :heavy_check_mark:                                                                                      | The attribution actor who will run the scheduled pipeline.                                              |                                                                                                         |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | The date and time the pipeline was created.                                                             |                                                                                                         |
| `description`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | Description of the schedule.                                                                            |                                                                                                         |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | The unique ID of the schedule.                                                                          |                                                                                                         |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | Name of the schedule.                                                                                   |                                                                                                         |
| `parameters`                                                                                            | Record<string, *operations.ListSchedulesForProjectParameters*>                                          | :heavy_check_mark:                                                                                      | Pipeline parameters represented as key-value pairs. Must contain branch or tag.                         | {<br/>"deploy_prod": true,<br/>"branch": "feature/design-new-api"<br/>}                                 |
| `projectSlug`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | The project-slug for the schedule                                                                       | gh/CircleCI-Public/api-preview-docs                                                                     |
| `timetable`                                                                                             | *operations.ListSchedulesForProjectTimetable*                                                           | :heavy_check_mark:                                                                                      | Timetable that specifies when a schedule triggers.                                                      |                                                                                                         |
| `updatedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | The date and time the pipeline was last updated.                                                        |                                                                                                         |