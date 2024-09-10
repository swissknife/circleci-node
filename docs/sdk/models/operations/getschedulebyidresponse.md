# GetScheduleByIdResponse

## Example Usage

```typescript
import { GetScheduleByIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdResponse = {
  actor: {
    id: "68a363c8-873e-4484-b80b-1f6b8ca275a6",
    login: "Abagail29",
    name: "<value>",
  },
  createdAt: new Date("2024-05-29T19:06:22.159Z"),
  description: "Front-line mission-critical frame",
  id: "cc699171-b51c-41bd-b1cf-4b888ebdfc4c",
  name: "<value>",
  parameters: {
    "deploy_prod": true,
    "branch": "feature/design-new-api",
  },
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  timetable: {
    daysOfMonth: [
      781491,
    ],
    hoursOfDay: [
      659971,
    ],
    perHour: 569706,
  },
  updatedAt: new Date("2023-09-28T22:34:37.077Z"),
};
```

## Supported Types

### `operations.GetScheduleByIdSchedule`

```typescript
const value: operations.GetScheduleByIdSchedule = /* values here */
```

### `operations.GetScheduleByIdResponseBody`

```typescript
const value: operations.GetScheduleByIdResponseBody = /* values here */
```

