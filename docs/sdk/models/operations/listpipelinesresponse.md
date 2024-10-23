# ListPipelinesResponse


## Supported Types

### `operations.ListPipelinesPipelineListResponse`

```typescript
const value: operations.ListPipelinesPipelineListResponse = {
  items: [
    {
      createdAt: new Date("2022-01-19T16:14:20.571Z"),
      errors: [
        {
          message: "<value>",
          type: "permission",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "setup-pending",
      trigger: {
        actor: {
          avatarUrl: "https://insignificant-marksman.net",
          login: "Spencer4",
        },
        receivedAt: new Date("2023-02-18T15:55:24.931Z"),
        type: "api",
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

