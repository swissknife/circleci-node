# Schedule

A schedule response

## Example Usage

```typescript
import { Schedule } from "circleci-v2-sdk/sdk/models/operations";

let value: Schedule = {
    actor: {
        id: "4ccca99b-c7fc-40b2-9ce1-0873e42b006d",
        login: "Hobart_Kilback",
        name: "<value>",
    },
    createdAt: new Date("2023-05-31T19:54:28.923Z"),
    description: "Optimized neutral moderator",
    id: "8581a582-08c5-44fe-ba9c-95f2eac5565d",
    name: "<value>",
    parameters: {
        deploy_prod: true,
        branch: "feature/design-new-api",
    },
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    timetable: {
        daysOfWeek: ["TUE"],
        hoursOfDay: [487148],
        perHour: 794306,
    },
    updatedAt: new Date("2024-12-21T10:39:12.574Z"),
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