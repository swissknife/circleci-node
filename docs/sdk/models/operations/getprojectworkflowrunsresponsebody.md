# GetProjectWorkflowRunsResponseBody

Paginated recent workflow runs.

## Example Usage

```typescript
import { GetProjectWorkflowRunsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowRunsResponseBody = {
  items: [
    {
      branch: "main",
      createdAt: new Date("2024-03-19T01:22:32.739Z"),
      creditsUsed: 5152,
      duration: 694158,
      id: "eb2725ee-459f-424d-b7e2-855765ebb49c",
      isApproval: false,
      status: "failed",
      stoppedAt: new Date("2024-04-24T21:02:13.160Z"),
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