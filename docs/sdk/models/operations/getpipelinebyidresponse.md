# GetPipelineByIdResponse


## Supported Types

### `operations.GetPipelineByIdPipeline`

```typescript
const value: operations.GetPipelineByIdPipeline = {
  createdAt: new Date("2022-04-26T04:24:39.015Z"),
  errors: [
    {
      message: "<value>",
      type: "plan",
    },
  ],
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  number: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  state: "pending",
  trigger: {
    actor: {
      avatarUrl: "https://lustrous-publication.net/",
      login: "Sven.Hahn70",
    },
    receivedAt: new Date("2022-08-01T14:44:02.184Z"),
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

### `operations.GetPipelineByIdResponseBody`

```typescript
const value: operations.GetPipelineByIdResponseBody = {};
```

