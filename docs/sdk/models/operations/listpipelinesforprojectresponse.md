# ListPipelinesForProjectResponse


## Supported Types

### `operations.ListPipelinesForProjectPipelineListResponse`

```typescript
const value: operations.ListPipelinesForProjectPipelineListResponse = {
  items: [
    {
      createdAt: new Date("2024-07-24T09:07:52.552Z"),
      errors: [
        {
          message: "<value>",
          type: "timeout",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "setup",
      trigger: {
        actor: {
          avatarUrl: "https://monumental-instruction.com",
          login: "Maxwell.Franey50",
        },
        receivedAt: new Date("2022-04-09T05:57:20.488Z"),
        type: "explicit",
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

### `operations.ListPipelinesForProjectResponseBody`

```typescript
const value: operations.ListPipelinesForProjectResponseBody = {};
```

