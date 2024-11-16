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
  scheduleId: "94da818a-f9ff-4a87-be01-1c5a968af991",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                                 | [operations.UpdateScheduleUpdateScheduleParameters](../../../sdk/models/operations/updatescheduleupdatescheduleparameters.md) | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `scheduleId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The unique ID of the schedule.                                                                                                |