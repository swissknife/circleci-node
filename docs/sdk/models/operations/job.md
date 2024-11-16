# Job

Job

## Example Usage

```typescript
import { Job } from "circleci-v2-sdk/sdk/models/operations";

let value: Job = {
  dependencies: [
    "0f80a41d-310b-4a03-9b29-37d4a715dfd2",
  ],
  id: "d8cc157f-e616-48e4-94a8-327ccf660dac",
  jobNumber: 1,
  name: "<value>",
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  startedAt: new Date("2024-10-05T12:46:10.291Z"),
  status: "success",
  type: "build",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `approvalRequestId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID of the job.                                                                     |                                                                                               |
| `approvedBy`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID of the user.                                                                    |                                                                                               |
| `canceledBy`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID of the user.                                                                    |                                                                                               |
| `dependencies`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | A sequence of the unique job IDs for the jobs that this job depends upon in the workflow.     |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the job.                                                                     |                                                                                               |
| `jobNumber`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of the job.                                                                        | 1                                                                                             |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the job.                                                                          |                                                                                               |
| `projectSlug`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project-slug for the job.                                                                 | gh/CircleCI-Public/api-preview-docs                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the job started.                                                            |                                                                                               |
| `status`                                                                                      | [operations.ListWorkflowJobsStatus](../../../sdk/models/operations/listworkflowjobsstatus.md) | :heavy_check_mark:                                                                            | The current status of the job.                                                                |                                                                                               |
| `stoppedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the job stopped.                                                                |                                                                                               |
| `type`                                                                                        | [operations.ListWorkflowJobsType](../../../sdk/models/operations/listworkflowjobstype.md)     | :heavy_check_mark:                                                                            | The type of job.                                                                              |                                                                                               |