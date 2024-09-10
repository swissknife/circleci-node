# GetPipelineByNumberResponse

## Example Usage

```typescript
import { GetPipelineByNumberResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetPipelineByNumberResponse = {
  createdAt: new Date("2024-10-18T19:05:45.276Z"),
  errors: [
    {
      message: "<value>",
      type: "config-fetch",
    },
  ],
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  number: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  state: "pending",
  trigger: {
    actor: {
      avatarUrl: "<value>",
      login: "Ernie_Cruickshank14",
    },
    receivedAt: new Date("2024-08-04T08:52:42.881Z"),
    type: "scheduled_pipeline",
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

## Supported Types

### `operations.GetPipelineByNumberPipeline`

```typescript
const value: operations.GetPipelineByNumberPipeline = /* values here */
```

### `operations.GetPipelineByNumberResponseBody`

```typescript
const value: operations.GetPipelineByNumberResponseBody = /* values here */
```

