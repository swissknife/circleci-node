# UpdateScheduleRequest

## Example Usage

```typescript
import { UpdateScheduleRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleRequest = {
  requestBody: {
    attributionActor: "current",
    parameters: {
      "deploy_prod": true,
      "branch": "feature/design-new-api",
    },
  },
  scheduleId: "8c29e33b-c35a-4697-8cdd-9970417d9a34",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                                 | [operations.UpdateScheduleUpdateScheduleParameters](../../../sdk/models/operations/updatescheduleupdatescheduleparameters.md) | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `scheduleId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The unique ID of the schedule.                                                                                                |