# TestRuns


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `pipelineNumber`                                                      | *number*                                                              | :heavy_check_mark:                                                    | The number of the pipeline associated with the provided test counts   |
| `successRate`                                                         | *number*                                                              | :heavy_check_mark:                                                    | The success rate calculated from test counts                          |
| `testCounts`                                                          | [operations.TestCounts](../../../sdk/models/operations/testcounts.md) | :heavy_check_mark:                                                    | Test counts for a given pipeline number                               |
| `workflowId`                                                          | *any*                                                                 | :heavy_check_mark:                                                    | The ID of the workflow associated with the provided test counts       |