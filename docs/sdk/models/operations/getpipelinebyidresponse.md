# GetPipelineByIdResponse

## Example Usage

```typescript
import { GetPipelineByIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetPipelineByIdResponse = {
    createdAt: new Date("2024-11-01T15:56:36.326Z"),
    errors: [
        {
            message: "<value>",
            type: "other",
        },
    ],
    id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
    number: 25,
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    state: "setup-pending",
    trigger: {
        actor: {
            avatarUrl: "<value>",
            login: "Joseph.Mann",
        },
        receivedAt: new Date("2024-09-14T16:10:11.420Z"),
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

### `operations.GetPipelineByIdPipeline`

```typescript
const value: operations.GetPipelineByIdPipeline = /* values here */
```

### `operations.GetPipelineByIdResponseBody`

```typescript
const value: operations.GetPipelineByIdResponseBody = /* values here */
```

