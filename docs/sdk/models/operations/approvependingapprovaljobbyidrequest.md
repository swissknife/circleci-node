# ApprovePendingApprovalJobByIdRequest

## Example Usage

```typescript
import { ApprovePendingApprovalJobByIdRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: ApprovePendingApprovalJobByIdRequest = {
  approvalRequestId: "87c9407e-e2d0-41f6-9170-083952f30444",
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `approvalRequestId`                  | *string*                             | :heavy_check_mark:                   | The ID of the job being approved.    |                                      |
| `id`                                 | *string*                             | :heavy_check_mark:                   | The unique ID of the workflow.       | 5034460f-c7c4-4c43-9457-de07e2029e7b |