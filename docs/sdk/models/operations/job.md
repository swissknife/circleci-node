# Job

Job

## Example Usage

```typescript
import { Job } from "circleci-v2-sdk/sdk/models/operations";

let value: Job = {
  dependencies: [
    "ebbd878b-612f-40bf-b2b4-3de5a2ce5ae0",
  ],
  id: "968db87e-31ab-4944-a947-5833b63d61b4",
  name: "<value>",
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  startedAt: new Date("2023-11-15T13:37:18.232Z"),
  status: "unauthorized",
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
| `jobNumber`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of the job.                                                                        |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the job.                                                                          |                                                                                               |
| `projectSlug`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project-slug for the job.                                                                 | gh/CircleCI-Public/api-preview-docs                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the job started.                                                            |                                                                                               |
| `status`                                                                                      | [operations.ListWorkflowJobsStatus](../../../sdk/models/operations/listworkflowjobsstatus.md) | :heavy_check_mark:                                                                            | The current status of the job.                                                                |                                                                                               |
| `stoppedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the job stopped.                                                                |                                                                                               |
| `type`                                                                                        | [operations.ListWorkflowJobsType](../../../sdk/models/operations/listworkflowjobstype.md)     | :heavy_check_mark:                                                                            | The type of job.                                                                              |                                                                                               |