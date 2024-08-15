# GetProjectWorkflowRunsResponseBody

Paginated recent workflow runs.

## Example Usage

```typescript
import { GetProjectWorkflowRunsResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetProjectWorkflowRunsResponseBody = {
    items: [
        {
            branch: "main",
            createdAt: new Date("2023-02-23T09:48:35.229Z"),
            creditsUsed: 968972,
            duration: 697142,
            id: "ee41f333-17fe-435b-a0eb-1ea426555ba3",
            isApproval: false,
            status: "canceled",
            stoppedAt: new Date("2022-07-08T08:25:26.143Z"),
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