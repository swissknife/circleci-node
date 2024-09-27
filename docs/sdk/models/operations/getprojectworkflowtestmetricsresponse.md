# GetProjectWorkflowTestMetricsResponse


## Supported Types

### `operations.GetProjectWorkflowTestMetricsResponseBody`

```typescript
const value: operations.GetProjectWorkflowTestMetricsResponseBody = {
  averageTestCount: 708771,
  mostFailedTests: [
    {
      classname: "<value>",
      failedRuns: 43975,
      file: "<value>",
      flaky: false,
      jobName: "<value>",
      p95Duration: 8795.21,
      source: "<value>",
      testName: "<value>",
      totalRuns: 520081,
    },
  ],
  mostFailedTestsExtra: 30661,
  slowestTests: [
    {
      classname: "<value>",
      failedRuns: 224413,
      file: "<value>",
      flaky: false,
      jobName: "<value>",
      p95Duration: 9536.76,
      source: "<value>",
      testName: "<value>",
      totalRuns: 582320,
    },
  ],
  slowestTestsExtra: 107472,
  testRuns: [
    {
      pipelineNumber: 287544,
      successRate: 4567.04,
      testCounts: {
        error: 20950,
        failure: 411615,
        skipped: 489459,
        success: 243678,
        total: 588639,
      },
      workflowId: "<value>",
    },
  ],
  totalTestRuns: 753240,
};
```

### `operations.GetProjectWorkflowTestMetricsInsightsResponseBody`

```typescript
const value: operations.GetProjectWorkflowTestMetricsInsightsResponseBody = {};
```

