# GetPipelineByNumberResponse


## Supported Types

### `operations.GetPipelineByNumberPipeline`

```typescript
const value: operations.GetPipelineByNumberPipeline = {
  createdAt: new Date("2022-07-28T12:36:44.736Z"),
  errors: [
    {
      message: "<value>",
      type: "plan",
    },
  ],
  id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  number: 25,
  projectSlug: "gh/CircleCI-Public/api-preview-docs",
  state: "setup-pending",
  trigger: {
    actor: {
      avatarUrl: "https://buttery-fun.org",
      login: "Arthur83",
    },
    receivedAt: new Date("2022-06-05T14:48:44.098Z"),
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

### `operations.GetPipelineByNumberResponseBody`

```typescript
const value: operations.GetPipelineByNumberResponseBody = {};
```

