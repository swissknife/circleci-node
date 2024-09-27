# Schedule

A schedule response

## Example Usage

```typescript
import { Schedule } from "circleci-v2-sdk/sdk/models/operations";

let value: Schedule = {
  actor: {
    id: "91bb1857-6121-43d0-96c1-3ba92c22c554",
    login: "Eva77",
    name: "<value>",
  },
  createdAt: new Date("2023-11-03T16:02:14.499Z"),
  description: "courteous pixellate yahoo",
  id: "e2034ca0-09a2-4935-a61f-f74fdb76c8a9",
  name: "<value>",
  parameters: {
    "deploy_prod": true,
    "branch": "feature/design-new-api",
  },
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  timetable: {
    daysOfWeek: [
      "SUN",
    ],
    hoursOfDay: [
      167089,
    ],
    perHour: 242044,
  },
  updatedAt: new Date("2022-08-09T02:28:54.372Z"),
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