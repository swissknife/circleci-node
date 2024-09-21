# ListMyPipelinesPipelineListResponse

List of pipelines

## Example Usage

```typescript
import { ListMyPipelinesPipelineListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListMyPipelinesPipelineListResponse = {
  items: [
    {
      createdAt: new Date("2022-02-08T14:25:18.262Z"),
      errors: [
        {
          message: "<value>",
          type: "config-fetch",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "errored",
      trigger: {
        actor: {
          avatarUrl: "<value>",
          login: "Kobe6",
        },
        receivedAt: new Date("2023-02-21T02:44:46.039Z"),
        type: "api",
      },
      vcs: {
        branch: "feature/design-new-api",
        originRepositoryUrl:
          "https://github.com/CircleCI-Public/api-preview-docs",
        providerName: "GitHub",
        reviewId: "123",
        reviewUrl:
          "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
        revision: "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
        tag: "v3.1.4159",
        targetRepositoryUrl:
          "https://github.com/CircleCI-Public/api-preview-docs",
      },
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `items`                                                                                           | [operations.ListMyPipelinesPipeline](../../../sdk/models/operations/listmypipelinespipeline.md)[] | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `nextPageToken`                                                                                   | *string*                                                                                          | :heavy_check_mark:                                                                                | A token to pass as a `page-token` query parameter to return the next page of results.             |