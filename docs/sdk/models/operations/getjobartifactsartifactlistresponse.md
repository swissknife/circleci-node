# GetJobArtifactsArtifactListResponse

A paginated list of the job's artifacts.

## Example Usage

```typescript
import { GetJobArtifactsArtifactListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetJobArtifactsArtifactListResponse = {
    items: [
        {
            nodeIndex: 383103,
            path: "/usr/X11R6",
            url: "https://bright-inhibition.biz",
        },
    ],
    nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.Artifact](../../../sdk/models/operations/artifact.md)[]                   | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |