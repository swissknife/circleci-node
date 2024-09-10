# UpdateScheduleResponse

## Example Usage

```typescript
import { UpdateScheduleResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleResponse = {
  actor: {
    id: "dd6723dc-0f5a-4e2f-ba6b-700878756143",
    login: "Verna.Herzog",
    name: "<value>",
  },
  createdAt: new Date("2024-05-13T05:46:38.642Z"),
  description: "Persistent incremental parallelism",
  id: "55554080-d40b-4cac-86cb-d6b5f3ec9093",
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
      998527,
    ],
    perHour: 607631,
  },
  updatedAt: new Date("2022-05-25T04:58:30.177Z"),
};
```

## Supported Types

### `operations.UpdateScheduleSchedule`

```typescript
const value: operations.UpdateScheduleSchedule = /* values here */
```

### `operations.UpdateScheduleResponseBody`

```typescript
const value: operations.UpdateScheduleResponseBody = /* values here */
```

