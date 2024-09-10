# MostFailedTests

## Example Usage

```typescript
import { MostFailedTests } from "circleci-v2-sdk/sdk/models/operations";

let value: MostFailedTests = {
  classname: "<value>",
  failedRuns: 814967,
  file: "<value>",
  flaky: false,
  jobName: "<value>",
  p95Duration: 2572.33,
  source: "<value>",
  testName: "<value>",
  totalRuns: 985492,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `classname`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The class the test belongs to.                                        |
| `failedRuns`                                                          | *number*                                                              | :heavy_check_mark:                                                    | The number of times the test failed                                   |
| `file`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The file the test belongs to.                                         |
| `flaky`                                                               | *boolean*                                                             | :heavy_check_mark:                                                    | Whether the test is flaky.                                            |
| `jobName`                                                             | *string*                                                              | :heavy_check_mark:                                                    | The name of the job.                                                  |
| `p95Duration`                                                         | *number*                                                              | :heavy_check_mark:                                                    | The 95th percentile duration, in seconds, among a group of test runs. |
| `source`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The source of the test.                                               |
| `testName`                                                            | *string*                                                              | :heavy_check_mark:                                                    | The name of the test.                                                 |
| `totalRuns`                                                           | *number*                                                              | :heavy_check_mark:                                                    | The total number of times the test was run.                           |