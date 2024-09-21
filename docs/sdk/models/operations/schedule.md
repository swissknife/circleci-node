# Schedule

A schedule response

## Example Usage

```typescript
import { Schedule } from "circleci-v2-sdk/sdk/models/operations";

let value: Schedule = {
  actor: {
    id: "81d739c5-b6fc-450a-a31e-f4427dbd3be4",
    login: "Gregorio.Wisozk",
    name: "<value>",
  },
  createdAt: new Date("2023-05-06T15:43:47.155Z"),
  description: "Reverse-engineered value-added protocol",
  id: "e7b415b4-dc35-4d35-85c0-196a4ec1cffb",
  name: "<value>",
  parameters: {
    "deploy_prod": true,
    "branch": "feature/design-new-api",
  },
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  timetable: {
    daysOfMonth: [
      284233,
    ],
    hoursOfDay: [
      970213,
    ],
    perHour: 717486,
  },
  updatedAt: new Date("2023-11-01T09:34:41.066Z"),
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