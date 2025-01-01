# ListWorkflowJobsResponse


## Supported Types

### `operations.ListWorkflowJobsWorkflowJobListResponse`

```typescript
const value: operations.ListWorkflowJobsWorkflowJobListResponse = {
  items: [
    {
      dependencies: [
        "e9e4df6e-55ff-43d5-afde-9438ab286384",
      ],
      id: "3e591a4f-693d-4c3e-b0c7-d713f52c0140",
      jobNumber: 1,
      name: "<value>",
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      requires: {
        "d212e286-9962-4ed7-92e2-8699622ed720": [
          "success",
        ],
        "74be7583-44de-42a6-be75-8344de52a6f2": [
          "failed",
          "canceled",
        ],
        "a3349b77-90f7-4a39-b49b-7790f7da3943": [
          "success",
          "failed",
          "canceled",
        ],
      },
      startedAt: new Date("2025-01-27T11:27:15.190Z"),
      status: "infrastructure_fail",
      type: "approval",
    },
  ],
  nextPageToken: "<value>",
};
```

### `operations.ListWorkflowJobsResponseBody`

```typescript
const value: operations.ListWorkflowJobsResponseBody = {};
```

