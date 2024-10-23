# ListWorkflowsByPipelineIdResponse


## Supported Types

### `operations.ListWorkflowsByPipelineIdWorkflowListResponse`

```typescript
const value: operations.ListWorkflowsByPipelineIdWorkflowListResponse = {
  items: [
    {
      createdAt: new Date("2022-03-25T10:55:20.447Z"),
      id: "2ab9f72a-998f-4212-a399-3777c7c28d27",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "2c1f7516-a14d-4a32-ae42-f4176e211e72",
      status: "error",
      stoppedAt: new Date("2022-08-06T10:53:27.934Z"),
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

