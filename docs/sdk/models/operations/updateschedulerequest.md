# UpdateScheduleRequest

## Example Usage

```typescript
import { UpdateScheduleRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleRequest = {
    requestBody: {
        attributionActor: "current",
        parameters: {
            deploy_prod: true,
            branch: "feature/design-new-api",
        },
    },
    scheduleId: "0bf7a4fa-87cf-4535-a6fa-e54ebf60c321",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                                 | [operations.UpdateScheduleUpdateScheduleParameters](../../../sdk/models/operations/updatescheduleupdatescheduleparameters.md) | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `scheduleId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The unique ID of the schedule.                                                                                                |