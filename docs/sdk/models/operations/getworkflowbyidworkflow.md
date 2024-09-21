# GetWorkflowByIdWorkflow

A workflow

## Example Usage

```typescript
import { GetWorkflowByIdWorkflow } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowByIdWorkflow = {
  createdAt: new Date("2024-08-16T09:25:12.558Z"),
  id: "3f24d64b-0ed1-4cf7-99a4-a76eced09ba4",
  name: "build-and-test",
  pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  pipelineNumber: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  startedBy: "01893770-29fa-41d6-b193-65a6138c0919",
  status: "not_run",
  stoppedAt: new Date("2023-06-28T02:01:12.177Z"),
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
| `status`                                                                                      | [operations.GetWorkflowByIdStatus](../../../sdk/models/operations/getworkflowbyidstatus.md)   | :heavy_check_mark:                                                                            | The current status of the workflow.                                                           |                                                                                               |
| `stoppedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the workflow stopped.                                                       |                                                                                               |
| `tag`                                                                                         | [operations.Tag](../../../sdk/models/operations/tag.md)                                       | :heavy_minus_sign:                                                                            | Tag used for the workflow                                                                     | setup                                                                                         |