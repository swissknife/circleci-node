# ListWorkflowsByPipelineIdResponse


## Supported Types

### `operations.ListWorkflowsByPipelineIdWorkflowListResponse`

```typescript
const value: operations.ListWorkflowsByPipelineIdWorkflowListResponse = {
  items: [
    {
      createdAt: new Date("2022-06-23T05:36:11.637Z"),
      id: "ab9f72a9-98f2-4123-8993-777c7c28d279",
      name: "build-and-test",
      pipelineId: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      pipelineNumber: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedBy: "c1f7516a-14da-432e-a42f-4176e211e729",
      status: "running",
      stoppedAt: new Date("2023-10-23T22:18:54.790Z"),
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

