# GetProjectWorkflowRunsResponse

## Example Usage

```typescript
import { GetProjectWorkflowRunsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowRunsResponse = {
  items: [
    {
      branch: "main",
      createdAt: new Date("2024-05-08T10:11:55.203Z"),
      creditsUsed: 801836,
      duration: 288398,
      id: "13aa63aa-e8d6-4786-8dbb-675fd5e60b37",
      isApproval: false,
      status: "failed",
      stoppedAt: new Date("2024-10-24T06:19:40.469Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `operations.GetProjectWorkflowRunsResponseBody`

```typescript
const value: operations.GetProjectWorkflowRunsResponseBody = /* values here */
```

### `operations.GetProjectWorkflowRunsInsightsResponseBody`

```typescript
const value: operations.GetProjectWorkflowRunsInsightsResponseBody = /* values here */
```

