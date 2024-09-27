# GetPipelineByNumberResponse


## Supported Types

### `operations.GetPipelineByNumberPipeline`

```typescript
const value: operations.GetPipelineByNumberPipeline = {
  createdAt: new Date("2023-09-19T08:40:07.794Z"),
  errors: [
    {
      message: "<value>",
      type: "trigger-rule",
    },
  ],
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  number: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  state: "created",
  trigger: {
    actor: {
      avatarUrl: "https://unkempt-blossom.com/",
      login: "Lionel_Smitham14",
    },
    receivedAt: new Date("2023-04-14T11:56:41.335Z"),
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

### `operations.GetPipelineByNumberResponseBody`

```typescript
const value: operations.GetPipelineByNumberResponseBody = {};
```

