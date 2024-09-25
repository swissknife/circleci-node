# CreateScheduleResponse

## Example Usage

```typescript
import { CreateScheduleResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateScheduleResponse = {
  actor: {
    id: "825b6cbf-8c55-4661-a81e-0742cb2acc1a",
    login: "Sage_Koepp",
    name: "<value>",
  },
  createdAt: new Date("2022-12-29T08:33:05.197Z"),
  description: "Switchable heuristic approach",
  id: "7d709fd9-ed79-4bd0-9c7a-c8261bfc6948",
  name: "<value>",
  parameters: {
    "deploy_prod": true,
    "branch": "feature/design-new-api",
  },
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  timetable: {
    daysOfMonth: [
      259341,
    ],
    hoursOfDay: [
      964021,
    ],
    perHour: 661949,
  },
  updatedAt: new Date("2022-03-17T09:07:57.019Z"),
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

