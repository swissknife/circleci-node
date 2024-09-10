# ListMyPipelinesPipeline

A pipeline response.

## Example Usage

```typescript
import { ListMyPipelinesPipeline } from "circleci-v2-sdk/sdk/models/operations";

let value: ListMyPipelinesPipeline = {
  createdAt: new Date("2022-08-27T13:24:12.160Z"),
  errors: [
    {
      message: "<value>",
      type: "timeout",
    },
  ],
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  number: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  state: "pending",
  trigger: {
    actor: {
      avatarUrl: "<value>",
      login: "Weldon.Crooks70",
    },
    receivedAt: new Date("2022-07-17T01:20:06.877Z"),
    type: "explicit",
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
| `errors`                                                                                      | [operations.ListMyPipelinesErrors](../../../sdk/models/operations/listmypipelineserrors.md)[] | :heavy_check_mark:                                                                            | A sequence of errors that have occurred within the pipeline.                                  |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the pipeline.                                                                | 5034460f-c7c4-4c43-9457-de07e2029e7b                                                          |
| `number`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of the pipeline.                                                                   | 25                                                                                            |
| `projectSlug`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The project-slug for the pipeline.                                                            | gh/CircleCI-Public/api-preview-docs                                                           |
| `state`                                                                                       | [operations.ListMyPipelinesState](../../../sdk/models/operations/listmypipelinesstate.md)     | :heavy_check_mark:                                                                            | The current state of the pipeline.                                                            |                                                                                               |
| `trigger`                                                                                     | [operations.ListMyPipelinesTrigger](../../../sdk/models/operations/listmypipelinestrigger.md) | :heavy_check_mark:                                                                            | A summary of the trigger.                                                                     |                                                                                               |
| `triggerParameters`                                                                           | Record<string, *operations.ListMyPipelinesTriggerParameters*>                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the pipeline was last updated.                                              |                                                                                               |
| `vcs`                                                                                         | [operations.ListMyPipelinesVcs](../../../sdk/models/operations/listmypipelinesvcs.md)         | :heavy_minus_sign:                                                                            | VCS information for the pipeline.                                                             |                                                                                               |