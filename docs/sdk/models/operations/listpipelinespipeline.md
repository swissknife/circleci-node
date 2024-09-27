# ListPipelinesPipeline

A pipeline response.

## Example Usage

```typescript
import { ListPipelinesPipeline } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesPipeline = {
  createdAt: new Date("2023-02-23T03:33:36.485Z"),
  errors: [
    {
      message: "<value>",
      type: "plan",
    },
  ],
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  number: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  state: "errored",
  trigger: {
    actor: {
      avatarUrl: "https://intelligent-sustenance.biz",
      login: "Ariel2",
    },
    receivedAt: new Date("2024-08-19T20:52:25.676Z"),
    type: "api",
  },
  vcs: {
    branch: "feature/design-new-api",
    originRepositoryUrl: "https://github.com/CircleCI-Public/api-preview-docs",
    providerName: "GitHub",
    reviewId: "123",
    reviewUrl: "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
    revision: "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
    tag: "v3.1.4159",
    targetRepositoryUrl: "https://github.com/CircleCI-Public/api-preview-docs",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time the pipeline was created.                                                   |                                                                                               |
| `errors`                                                                                      | [operations.ListPipelinesErrors](../../../sdk/models/operations/listpipelineserrors.md)[]     | :heavy_check_mark:                                                                            | A sequence of errors that have occurred within the pipeline.                                  |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the pipeline.                                                                | 5034460f-c7c4-4c43-9457-de07e2029e7b                                                          |
| `number`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of the pipeline.                                                                   | 25                                                                                            |
| `projectSlug`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project-slug for the pipeline.                                                            | gh/CircleCI-Public/api-preview-docs                                                           |
| `state`                                                                                       | [operations.ListPipelinesState](../../../sdk/models/operations/listpipelinesstate.md)         | :heavy_check_mark:                                                                            | The current state of the pipeline.                                                            |                                                                                               |
| `trigger`                                                                                     | [operations.ListPipelinesTrigger](../../../sdk/models/operations/listpipelinestrigger.md)     | :heavy_check_mark:                                                                            | A summary of the trigger.                                                                     |                                                                                               |
| `triggerParameters`                                                                           | Record<string, *operations.ListPipelinesTriggerParameters*>                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the pipeline was last updated.                                              |                                                                                               |
| `vcs`                                                                                         | [operations.ListPipelinesVcs](../../../sdk/models/operations/listpipelinesvcs.md)             | :heavy_minus_sign:                                                                            | VCS information for the pipeline.                                                             |                                                                                               |