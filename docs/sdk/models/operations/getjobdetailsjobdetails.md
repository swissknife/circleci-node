# GetJobDetailsJobDetails

Job Details

## Example Usage

```typescript
import { GetJobDetailsJobDetails } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobDetailsJobDetails = {
  contexts: [
    {
      name: "<value>",
    },
  ],
  createdAt: new Date("2024-06-29T19:26:32.721Z"),
  duration: 660536,
  executor: {
    resourceClass: "<value>",
  },
  latestWorkflow: {
    id: "2f1d46ca-f91e-4cb0-862d-befcf9005ddf",
    name: "build-and-test",
  },
  messages: [
    {
      message: "<value>",
      type: "<value>",
    },
  ],
  name: "<value>",
  number: 44571,
  organization: {
    name: "<value>",
  },
  parallelRuns: [
    {
      index: 913284,
      status: "<value>",
    },
  ],
  parallelism: 305047,
  pipeline: {
    id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  },
  project: {
    externalUrl: "https://github.com/CircleCI-Public/api-preview-docs",
    id: "8f6a6c83-448b-4fbc-b256-a445c9115cbb",
    name: "api-preview-docs",
    slug: "gh/CircleCI-Public/api-preview-docs",
  },
  queuedAt: new Date("2022-11-11T17:15:53.855Z"),
  startedAt: new Date("2023-08-24T21:19:59.665Z"),
  status: "infrastructure_fail",
  webUrl: "https://well-to-do-dusk.net",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contexts`                                                                                    | [operations.Contexts](../../../sdk/models/operations/contexts.md)[]                           | :heavy_check_mark:                                                                            | List of contexts used by the job.                                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time when the job was created.                                                            |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Duration of a job in milliseconds.                                                            |
| `executor`                                                                                    | [operations.Executor](../../../sdk/models/operations/executor.md)                             | :heavy_check_mark:                                                                            | Information about executor used for a job.                                                    |
| `latestWorkflow`                                                                              | [operations.LatestWorkflow](../../../sdk/models/operations/latestworkflow.md)                 | :heavy_check_mark:                                                                            | Info about the latest workflow the job was a part of.                                         |
| `messages`                                                                                    | [operations.Messages](../../../sdk/models/operations/messages.md)[]                           | :heavy_check_mark:                                                                            | Messages from CircleCI execution platform.                                                    |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the job.                                                                          |
| `number`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of the job.                                                                        |
| `organization`                                                                                | [operations.Organization](../../../sdk/models/operations/organization.md)                     | :heavy_check_mark:                                                                            | Information about an organization.                                                            |
| `parallelRuns`                                                                                | [operations.ParallelRuns](../../../sdk/models/operations/parallelruns.md)[]                   | :heavy_check_mark:                                                                            | Info about parallels runs and their status.                                                   |
| `parallelism`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | A number of parallel runs the job has.                                                        |
| `pipeline`                                                                                    | [operations.Pipeline](../../../sdk/models/operations/pipeline.md)                             | :heavy_check_mark:                                                                            | Info about a pipeline the job is a part of.                                                   |
| `project`                                                                                     | [operations.Project](../../../sdk/models/operations/project.md)                               | :heavy_check_mark:                                                                            | Information about a project.                                                                  |
| `queuedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time when the job was placed in a queue.                                                  |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the job started.                                                            |
| `status`                                                                                      | [operations.Status](../../../sdk/models/operations/status.md)                                 | :heavy_check_mark:                                                                            | The current status of the job.                                                                |
| `stoppedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the job stopped.                                                                |
| `webUrl`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | URL of the job in CircleCI Web UI.                                                            |