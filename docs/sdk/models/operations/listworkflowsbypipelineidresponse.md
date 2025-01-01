# ListWorkflowsByPipelineIdResponse


## Supported Types

### `operations.ListWorkflowsByPipelineIdWorkflowListResponse`

```typescript
const value: operations.ListWorkflowsByPipelineIdWorkflowListResponse = {
  items: [
    {
      createdAt: new Date("2024-11-06T08:04:38.587Z"),
      id: "6b525ef3-c4e2-4a1f-abd9-7987c22651dc",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "f1c453c2-da0c-4aeb-b8d4-84f305808db9",
      status: "unauthorized",
      stoppedAt: new Date("2025-06-22T09:30:18.789Z"),
      tag: "setup",
    },
  ],
  nextPageToken: "<value>",
};
```

### `operations.ListWorkflowsByPipelineIdResponseBody`

```typescript
const value: operations.ListWorkflowsByPipelineIdResponseBody = {};
```

