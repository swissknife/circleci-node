# ListPipelinesForProjectResponse

## Example Usage

```typescript
import { ListPipelinesForProjectResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesForProjectResponse = {
    items: [
        {
            createdAt: new Date("2023-05-12T04:37:22.742Z"),
            errors: [
                {
                    message: "<value>",
                    type: "other",
                },
            ],
            id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
            number: 25,
            projectSlug: "gh/CircleCI-Public/api-preview-docs",
            state: "errored",
            trigger: {
                actor: {
                    avatarUrl: "<value>",
                    login: "Monique26",
                },
                receivedAt: new Date("2023-04-17T09:46:15.327Z"),
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
        },
    ],
    nextPageToken: "<value>",
};
```

## Supported Types

### `operations.ListPipelinesForProjectPipelineListResponse`

```typescript
const value: operations.ListPipelinesForProjectPipelineListResponse = /* values here */
```

### `operations.ListPipelinesForProjectResponseBody`

```typescript
const value: operations.ListPipelinesForProjectResponseBody = /* values here */
```

