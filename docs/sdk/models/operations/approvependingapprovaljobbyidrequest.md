# ApprovePendingApprovalJobByIdRequest

## Example Usage

```typescript
import { ApprovePendingApprovalJobByIdRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: ApprovePendingApprovalJobByIdRequest = {
    approvalRequestId: "3825fdc4-2c87-46c2-82df-b4cfc1c76230",
    id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `approvalRequestId`                  | *string*                             | :heavy_check_mark:                   | The ID of the job being approved.    |                                      |
| `id`                                 | *string*                             | :heavy_check_mark:                   | The unique ID of the workflow.       | 5034460f-c7c4-4c43-9457-de07e2029e7b |