# ListWorkflowJobsResponse

## Example Usage

```typescript
import { ListWorkflowJobsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsResponse = {
  items: [
    {
      dependencies: [
        "0d7fe8a5-4281-475c-86e3-e9184ba16e6b",
      ],
      id: "d8f8cfb9-5066-4d3b-90ea-64296be4a609",
      name: "<value>",
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      startedAt: new Date("2022-01-16T01:02:59.626Z"),
      status: "not_running",
      type: "build",
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `operations.ListWorkflowJobsWorkflowJobListResponse`

```typescript
const value: operations.ListWorkflowJobsWorkflowJobListResponse = /* values here */
```

### `operations.ListWorkflowJobsResponseBody`

```typescript
const value: operations.ListWorkflowJobsResponseBody = /* values here */
```

