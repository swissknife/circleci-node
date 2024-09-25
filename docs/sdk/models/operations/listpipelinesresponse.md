# ListPipelinesResponse

## Example Usage

```typescript
import { ListPipelinesResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesResponse = {
  items: [
    {
      createdAt: new Date("2024-01-30T00:57:24.858Z"),
      errors: [
        {
          message: "<value>",
          type: "trigger-rule",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "setup-pending",
      trigger: {
        actor: {
          avatarUrl: "<value>",
          login: "Bria70",
        },
        receivedAt: new Date("2022-11-20T15:45:49.704Z"),
        type: "api",
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

### `operations.ListPipelinesPipelineListResponse`

```typescript
const value: operations.ListPipelinesPipelineListResponse = /* values here */
```

### `operations.ListPipelinesResponseBody`

```typescript
const value: operations.ListPipelinesResponseBody = /* values here */
```

