# ListMyPipelinesResponse

## Example Usage

```typescript
import { ListMyPipelinesResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListMyPipelinesResponse = {
  items: [
    {
      createdAt: new Date("2022-05-10T08:57:55.123Z"),
      errors: [
        {
          message: "<value>",
          type: "other",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "setup",
      trigger: {
        actor: {
          avatarUrl: "<value>",
          login: "Bert_Kulas",
        },
        receivedAt: new Date("2022-12-20T06:39:41.132Z"),
        type: "scheduled_pipeline",
      },
      vcs: {
        branch: "feature/design-new-api",
        originRepositoryUrl:
          "https://github.com/CircleCI-Public/api-preview-docs",
        providerName: "GitHub",
        reviewId: "123",
        reviewUrl:
          "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
        revision: "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
        tag: "v3.1.4159",
        targetRepositoryUrl:
          "https://github.com/CircleCI-Public/api-preview-docs",
      },
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `operations.ListMyPipelinesPipelineListResponse`

```typescript
const value: operations.ListMyPipelinesPipelineListResponse = /* values here */
```

### `operations.ListMyPipelinesResponseBody`

```typescript
const value: operations.ListMyPipelinesResponseBody = /* values here */
```

