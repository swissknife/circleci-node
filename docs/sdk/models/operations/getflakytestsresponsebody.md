# GetFlakyTestsResponseBody

Flaky tests response

## Example Usage

```typescript
import { GetFlakyTestsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetFlakyTestsResponseBody = {
  flakyTests: [
    {
      classname: "<value>",
      file: "<value>",
      jobName: "<value>",
      jobNumber: 961571,
      pipelineNumber: 455169,
      source: "<value>",
      testName: "<value>",
      timesFlaked: 231701,
      workflowCreatedAt: "<value>",
      workflowId: "<value>",
      workflowName: "<value>",
    },
  ],
  totalFlakyTests: 5,
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flakyTests`                                                                                                                                               | [operations.FlakyTests](../../../sdk/models/operations/flakytests.md)[]                                                                                    | :heavy_check_mark:                                                                                                                                         | A list of all instances of flakes. Note that a test is no longer considered flaky after 2 weeks have passed without a flake. Each flake resets this timer. |                                                                                                                                                            |
| `totalFlakyTests`                                                                                                                                          | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | A count of unique tests that have failed. If your project has N tests that have flaked multiple times each, this will be equal to N.                       | 5                                                                                                                                                          |