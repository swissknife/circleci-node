# GetWorkflowByIdWorkflow

A workflow

## Example Usage

```typescript
import { GetWorkflowByIdWorkflow } from "circleci-v2-sdk/sdk/models/operations";

let value: GetWorkflowByIdWorkflow = {
    createdAt: new Date("2022-05-05T19:52:13.491Z"),
    id: "fb1bd23f-db14-4db6-be5a-685998e22ae2",
    name: "build-and-test",
    pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
    pipelineNumber: 25,
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    startedBy: "0da16fc2-b271-4a28-9c57-e854e90439d2",
    status: "running",
    stoppedAt: new Date("2022-06-24T18:40:29.878Z"),
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