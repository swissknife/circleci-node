# ListWorkflowJobsResponse

## Example Usage

```typescript
import { ListWorkflowJobsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListWorkflowJobsResponse = {
    items: [
        {
            dependencies: ["62550a28-382a-4c48-bafd-2315bba65016"],
            id: "4e06f5bf-6ae5-491b-88bd-ef3612b63c20",
            name: "<value>",
            projectSlug: "gh/CircleCI-Public/api-preview-docs",
            startedAt: new Date("2022-12-17T12:12:43.310Z"),
            status: "unauthorized",
            type: "approval",
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

