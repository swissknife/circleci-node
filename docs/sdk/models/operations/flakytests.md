# FlakyTests

## Example Usage

```typescript
import { FlakyTests } from "circleci-v2-sdk/sdk/models/operations";

let value: FlakyTests = {
  classname: "<value>",
  file: "<value>",
  jobName: "<value>",
  jobNumber: 389135,
  pipelineNumber: 952143,
  source: "<value>",
  testName: "<value>",
  timesFlaked: 300029,
  workflowCreatedAt: "<value>",
  workflowId: "<value>",
  workflowName: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `classname`                                                     | *string*                                                        | :heavy_check_mark:                                              | The class the test belongs to.                                  |
| `file`                                                          | *string*                                                        | :heavy_check_mark:                                              | The file the test belongs to.                                   |
| `jobName`                                                       | *string*                                                        | :heavy_check_mark:                                              | The name of the job.                                            |
| `jobNumber`                                                     | *number*                                                        | :heavy_check_mark:                                              | The number of the job.                                          |
| `pipelineNumber`                                                | *number*                                                        | :heavy_check_mark:                                              | The number of the pipeline.                                     |
| `source`                                                        | *string*                                                        | :heavy_check_mark:                                              | The source of the test.                                         |
| `testName`                                                      | *string*                                                        | :heavy_check_mark:                                              | The name of the test.                                           |
| `timeWasted`                                                    | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `timesFlaked`                                                   | *number*                                                        | :heavy_check_mark:                                              | The number of times the test flaked.                            |
| `workflowCreatedAt`                                             | *string*                                                        | :heavy_check_mark:                                              | The date and time when workflow was created.                    |
| `workflowId`                                                    | *any*                                                           | :heavy_check_mark:                                              | The ID of the workflow associated with the provided test counts |
| `workflowName`                                                  | *string*                                                        | :heavy_check_mark:                                              | The name of the workflow.                                       |