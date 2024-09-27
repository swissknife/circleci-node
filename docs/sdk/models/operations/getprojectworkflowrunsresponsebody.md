# GetProjectWorkflowRunsResponseBody

Paginated recent workflow runs.

## Example Usage

```typescript
import { GetProjectWorkflowRunsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowRunsResponseBody = {
  items: [
    {
      branch: "main",
      createdAt: new Date("2024-08-08T00:00:21.031Z"),
      creditsUsed: 627735,
      duration: 401428,
      id: "6c530ee1-521e-40f1-8d95-5c5a87e8db0c",
      isApproval: false,
      status: "unauthorized",
      stoppedAt: new Date("2022-02-17T01:04:40.475Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                   | [operations.GetProjectWorkflowRunsItems](../../../sdk/models/operations/getprojectworkflowrunsitems.md)[] | :heavy_check_mark:                                                                                        | Recent workflow runs.                                                                                     |
| `nextPageToken`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | A token to pass as a `page-token` query parameter to return the next page of results.                     |