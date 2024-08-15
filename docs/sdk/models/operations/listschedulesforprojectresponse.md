# ListSchedulesForProjectResponse

## Example Usage

```typescript
import { ListSchedulesForProjectResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectResponse = {
    items: [
        {
            actor: {
                id: "5b34418e-3bb9-41c8-9975-e0e8419d8f84",
                login: "Tressie28",
                name: "<value>",
            },
            createdAt: new Date("2024-12-13T20:14:50.701Z"),
            description: "Distributed transitional ability",
            id: "7edcc4aa-5f3c-4abd-905a-972e05672822",
            name: "<value>",
            parameters: {
                deploy_prod: true,
                branch: "feature/design-new-api",
            },
            projectSlug: "gh/CircleCI-Public/api-preview-docs",
            timetable: {
                daysOfWeek: ["THU"],
                hoursOfDay: [176935],
                perHour: 830477,
            },
            updatedAt: new Date("2022-08-08T01:37:10.043Z"),
        },
    ],
    nextPageToken: "<value>",
};
```

## Supported Types

### `operations.ListSchedulesForProjectResponseBody`

```typescript
const value: operations.ListSchedulesForProjectResponseBody = /* values here */
```

### `operations.ListSchedulesForProjectScheduleResponseBody`

```typescript
const value: operations.ListSchedulesForProjectScheduleResponseBody = /* values here */
```

