# ApprovePendingApprovalJobByIdRequest

## Example Usage

```typescript
import { ApprovePendingApprovalJobByIdRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: ApprovePendingApprovalJobByIdRequest = {
  approvalRequestId: "fd9d3dd3-8eaa-484f-974b-95431a8300b3",
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `approvalRequestId`                  | *string*                             | :heavy_check_mark:                   | The ID of the job being approved.    |                                      |
| `id`                                 | *string*                             | :heavy_check_mark:                   | The unique ID of the workflow.       | 5034460f-c7c4-4c43-9457-de07e2029e7b |