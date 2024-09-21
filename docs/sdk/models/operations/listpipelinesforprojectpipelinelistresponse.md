# ListPipelinesForProjectPipelineListResponse

List of pipelines

## Example Usage

```typescript
import { ListPipelinesForProjectPipelineListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesForProjectPipelineListResponse = {
  items: [
    {
      createdAt: new Date("2023-08-11T07:51:57.382Z"),
      errors: [
        {
          message: "<value>",
          type: "other",
        },
      ],
      id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
      number: 25,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      state: "pending",
      trigger: {
        actor: {
          avatarUrl: "<value>",
          login: "Darian.Quitzon",
        },
        receivedAt: new Date("2024-09-22T11:12:54.955Z"),
        type: "explicit",
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

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                           | [operations.ListPipelinesForProjectPipeline](../../../sdk/models/operations/listpipelinesforprojectpipeline.md)[] | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `nextPageToken`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | A token to pass as a `page-token` query parameter to return the next page of results.                             |