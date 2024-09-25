# Schedule

A schedule response

## Example Usage

```typescript
import { Schedule } from "circleci-v2-sdk/sdk/models/operations";

let value: Schedule = {
  actor: {
    id: "e506caf1-e576-413b-8020-d92cfee09495",
    login: "Irving30",
    name: "<value>",
  },
  createdAt: new Date("2023-12-25T00:37:49.378Z"),
  description: "Stand-alone multi-tasking pricing structure",
  id: "73c92cf5-41af-4271-b0ad-5e13e89020e2",
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
      365043,
    ],
    perHour: 267684,
  },
  updatedAt: new Date("2022-04-13T15:39:03.902Z"),
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