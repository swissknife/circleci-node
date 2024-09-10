# GetAllInsightsBranchesResponseBody

Project branches response.

## Example Usage

```typescript
import { GetAllInsightsBranchesResponseBody } from "circleci-v2-sdk/sdk/models/operations";

let value: GetAllInsightsBranchesResponseBody = {
  branches: [
    "main",
  ],
  orgId: "<value>",
  projectId: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `branches`                                      | *string*[]                                      | :heavy_check_mark:                              | A list of all the branches for a given project. |
| `orgId`                                         | *any*                                           | :heavy_check_mark:                              | The unique ID of the organization               |
| `projectId`                                     | *any*                                           | :heavy_check_mark:                              | The unique ID of the project                    |