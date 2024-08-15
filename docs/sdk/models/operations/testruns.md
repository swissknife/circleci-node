# TestRuns

## Example Usage

```typescript
import { TestRuns } from "circleci-v2-sdk/sdk/models/operations";

let value: TestRuns = {
    pipelineNumber: 201517,
    successRate: 6339.98,
    testCounts: {
        error: 548519,
        failure: 867290,
        skipped: 519643,
        success: 940210,
        total: 348783,
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