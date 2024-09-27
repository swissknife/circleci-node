# ListMyPipelinesResponse


## Supported Types

### `operations.ListMyPipelinesPipelineListResponse`

```typescript
const value: operations.ListMyPipelinesPipelineListResponse = {
  items: [
    {
      createdAt: new Date("2022-02-28T19:32:56.713Z"),
      errors: [
        {
          message: "<value>",
          type: "other",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "setup",
      trigger: {
        actor: {
          avatarUrl: "https://amused-halt.com",
          login: "Dell27",
        },
        receivedAt: new Date("2023-01-22T05:43:00.785Z"),
        type: "webhook",
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

### `operations.ListMyPipelinesResponseBody`

```typescript
const value: operations.ListMyPipelinesResponseBody = {};
```

