# CreateScheduleResponse

## Example Usage

```typescript
import { CreateScheduleResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateScheduleResponse = {
    actor: {
        id: "4cf5e9d9-a457-48ad-81ac-600dec001ac8",
        login: "Angela.Dach89",
        name: "<value>",
    },
    createdAt: new Date("2024-04-27T11:48:29.610Z"),
    description: "Balanced local throughput",
    id: "f8f0f816-ff34-477c-93e9-02c14125b096",
    name: "<value>",
    parameters: {
        deploy_prod: true,
        branch: "feature/design-new-api",
    },
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    timetable: {
        daysOfWeek: ["THU"],
        hoursOfDay: [388169],
        perHour: 401688,
    },
    updatedAt: new Date("2023-09-02T00:34:53.266Z"),
};
```

## Supported Types

### `operations.CreateScheduleSchedule`

```typescript
const value: operations.CreateScheduleSchedule = /* values here */
```

### `operations.CreateScheduleResponseBody`

```typescript
const value: operations.CreateScheduleResponseBody = /* values here */
```

