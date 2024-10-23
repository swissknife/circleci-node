# ListMyPipelinesResponse


## Supported Types

### `operations.ListMyPipelinesPipelineListResponse`

```typescript
const value: operations.ListMyPipelinesPipelineListResponse = {
  items: [
    {
      createdAt: new Date("2023-08-06T02:09:12.930Z"),
      errors: [
        {
          message: "<value>",
          type: "config-fetch",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "created",
      trigger: {
        actor: {
          avatarUrl: "https://sophisticated-sand.com",
          login: "Gwen.Franey",
        },
        receivedAt: new Date("2022-11-01T01:12:15.021Z"),
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

