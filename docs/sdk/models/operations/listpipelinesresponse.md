# ListPipelinesResponse


## Supported Types

### `operations.ListPipelinesPipelineListResponse`

```typescript
const value: operations.ListPipelinesPipelineListResponse = {
  items: [
    {
      createdAt: new Date("2024-12-21T18:06:07.641Z"),
      errors: [
        {
          message: "<value>",
          type: "config-fetch",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "setup",
      trigger: {
        actor: {
          avatarUrl: "https://putrid-solution.net/",
          login: "Haylie88",
        },
        receivedAt: new Date("2022-02-28T16:02:35.267Z"),
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

### `operations.ListPipelinesResponseBody`

```typescript
const value: operations.ListPipelinesResponseBody = {};
```

