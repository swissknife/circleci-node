# GetPipelineByIdResponse


## Supported Types

### `operations.GetPipelineByIdPipeline`

```typescript
const value: operations.GetPipelineByIdPipeline = {
  createdAt: new Date("2023-05-13T22:48:28.461Z"),
  errors: [
    {
      message: "<value>",
      type: "permission",
    },
  ],
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  number: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  state: "pending",
  trigger: {
    actor: {
      avatarUrl: "https://long-poetry.net",
      login: "Joshua_Nienow90",
    },
    receivedAt: new Date("2024-09-24T12:05:45.626Z"),
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

### `operations.GetPipelineByIdResponseBody`

```typescript
const value: operations.GetPipelineByIdResponseBody = {};
```

