# ListWorkflowsByPipelineIdRequest

## Example Usage

```typescript
import { ListWorkflowsByPipelineIdRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowsByPipelineIdRequest = {
  pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `pageToken`                                   | *string*                                      | :heavy_minus_sign:                            | A token to retrieve the next page of results. |                                               |
| `pipelineId`                                  | *string*                                      | :heavy_check_mark:                            | The unique ID of the pipeline.                | 5034460f-c7c4-4c43-9457-de07e2029e7b          |