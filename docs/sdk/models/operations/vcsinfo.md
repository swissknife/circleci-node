# VcsInfo

Information about the VCS that hosts the project source code.

## Example Usage

```typescript
import { VcsInfo } from "circleci-v2-sdk/sdk/models/operations";

let value: VcsInfo = {
  defaultBranch: "main",
  provider: "CircleCI",
  vcsUrl: "https://github.com/CircleCI-Public/api-preview-docs",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `defaultBranch`                                                   | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               | main                                                              |
| `provider`                                                        | [operations.Provider](../../../sdk/models/operations/provider.md) | :heavy_check_mark:                                                | The VCS provider                                                  |                                                                   |
| `vcsUrl`                                                          | *string*                                                          | :heavy_check_mark:                                                | URL to the repository hosting the project's code                  | https://github.com/CircleCI-Public/api-preview-docs               |