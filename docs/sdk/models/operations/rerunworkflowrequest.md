# RerunWorkflowRequest

## Example Usage

```typescript
import { RerunWorkflowRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: RerunWorkflowRequest = {
    requestBody: {
        enableSsh: false,
        fromFailed: false,
        jobs: ["c65b68ef-e73b-4bf2-be9a-7a322a9df150", "5e957edd-5e8c-4985-9178-5d0d69561822"],
        sparseTree: false,
    },
    id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                                             | [operations.RerunWorkflowRerunWorkflowParameters](../../../sdk/models/operations/rerunworkflowrerunworkflowparameters.md) | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |                                                                                                                           |
| `id`                                                                                                                      | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The unique ID of the workflow.                                                                                            | 5034460f-c7c4-4c43-9457-de07e2029e7b                                                                                      |