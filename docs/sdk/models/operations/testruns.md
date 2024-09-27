# TestRuns

## Example Usage

```typescript
import { TestRuns } from "circleci-v2-sdk/sdk/models/operations";

let value: TestRuns = {
  pipelineNumber: 591065,
  successRate: 9217.19,
  testCounts: {
    error: 805264,
    failure: 723942,
    skipped: 559174,
    success: 922299,
    total: 492361,
  },
  workflowId: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `pipelineNumber`                                                      | *number*                                                              | :heavy_check_mark:                                                    | The number of the pipeline associated with the provided test counts   |
| `successRate`                                                         | *number*                                                              | :heavy_check_mark:                                                    | The success rate calculated from test counts                          |
| `testCounts`                                                          | [operations.TestCounts](../../../sdk/models/operations/testcounts.md) | :heavy_check_mark:                                                    | Test counts for a given pipeline number                               |
| `workflowId`                                                          | *any*                                                                 | :heavy_check_mark:                                                    | The ID of the workflow associated with the provided test counts       |