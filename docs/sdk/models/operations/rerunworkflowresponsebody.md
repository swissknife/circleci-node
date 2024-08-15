# RerunWorkflowResponseBody

A response to rerunning a workflow

## Example Usage

```typescript
import { RerunWorkflowResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: RerunWorkflowResponseBody = {
    workflowId: "0e53027b-521a-4c40-9042-47e72b3c63a3",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `workflowId`                          | *string*                              | :heavy_check_mark:                    | The ID of the newly-created workflow. | 0e53027b-521a-4c40-9042-47e72b3c63a3  |