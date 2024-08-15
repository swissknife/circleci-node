# GetPipelineByIdResponse

## Example Usage

```typescript
import { GetPipelineByIdResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetPipelineByIdResponse = {
    createdAt: new Date("2024-08-21T13:46:31.491Z"),
    errors: [
        {
            message: "<value>",
            type: "plan",
        },
    ],
    id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
    number: 25,
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    state: "setup",
    trigger: {
        actor: {
            avatarUrl: "<value>",
            login: "Estella_Dare44",
        },
        receivedAt: new Date("2023-07-09T22:02:12.316Z"),
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

## Supported Types

### `operations.GetPipelineByIdPipeline`

```typescript
const value: operations.GetPipelineByIdPipeline = /* values here */
```

### `operations.GetPipelineByIdResponseBody`

```typescript
const value: operations.GetPipelineByIdResponseBody = /* values here */
```

