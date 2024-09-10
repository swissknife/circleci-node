# GetProjectWorkflowRunsResponseBody

Paginated recent workflow runs.

## Example Usage

```typescript
import { GetProjectWorkflowRunsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowRunsResponseBody = {
  items: [
    {
      branch: "main",
      createdAt: new Date("2023-07-27T12:26:04.164Z"),
      creditsUsed: 15606,
      duration: 513075,
      id: "6a184039-4c26-4071-b93f-5f0642dac7af",
      isApproval: false,
      status: "failed",
      stoppedAt: new Date("2022-03-13T13:45:42.625Z"),
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