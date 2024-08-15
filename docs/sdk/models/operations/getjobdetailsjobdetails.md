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
    createdAt: new Date("2023-10-28T13:05:15.433Z"),
    duration: 309251,
    executor: {
        resourceClass: "<value>",
    },
    latestWorkflow: {
        id: "764a3e86-5e79-456f-9251-a5a9da660ff5",
        name: "build-and-test",
    },
    messages: [
        {
            message: "<value>",
            type: "<value>",
        },
    ],
    name: "<value>",
    number: 448143,
    organization: {
        name: "<value>",
    },
    parallelRuns: [
        {
            index: 721407,
            status: "<value>",
        },
    ],
    parallelism: 937636,
    pipeline: {
        id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
    },
    project: {
        externalUrl: "https://github.com/CircleCI-Public/api-preview-docs",
        id: "aad4f9ef-c1b4-4512-8103-2648dc2f6151",
        name: "api-preview-docs",
        slug: "gh/CircleCI-Public/api-preview-docs",
    },
    queuedAt: new Date("2023-10-02T09:51:49.346Z"),
    startedAt: new Date("2023-10-09T07:19:47.340Z"),
    status: "unauthorized",
    webUrl: "<value>",
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