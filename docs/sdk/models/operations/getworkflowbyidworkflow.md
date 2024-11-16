# GetWorkflowByIdWorkflow

A workflow

## Example Usage

```typescript
import { GetWorkflowByIdWorkflow } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowByIdWorkflow = {
  createdAt: new Date("2024-04-27T15:28:30.620Z"),
  id: "5363bda2-0973-458a-97f0-ae33c7f9e02a",
  name: "build-and-test",
  pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  pipelineNumber: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  startedBy: "d6b91bb1-8576-4121-93d0-6c13ba92c22c",
  status: "not_run",
  stoppedAt: new Date("2022-11-02T10:11:22.695Z"),
  tag: "setup",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `canceledBy`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the workflow was created.                                                   |                                                                                               |
| `erroredBy`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the workflow.                                                                |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the workflow.                                                                     | build-and-test                                                                                |
| `pipelineId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the pipeline this workflow belongs to.                                              | 5034460f-c7c4-4c43-9457-de07e2029e7b                                                          |
| `pipelineNumber`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of the pipeline this workflow belongs to.                                          | 25                                                                                            |
| `projectSlug`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project-slug for the pipeline this workflow belongs to.                                   | gh/CircleCI-Public/api-preview-docs                                                           |
| `startedBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [operations.Status](../../../sdk/models/operations/status.md)                                 | :heavy_check_mark:                                                                            | The current status of the workflow.                                                           |                                                                                               |
| `stoppedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the workflow stopped.                                                       |                                                                                               |
| `tag`                                                                                         | [operations.Tag](../../../sdk/models/operations/tag.md)                                       | :heavy_minus_sign:                                                                            | Tag used for the workflow                                                                     | setup                                                                                         |