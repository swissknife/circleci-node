# Artifact

An artifact

## Example Usage

```typescript
import { Artifact } from "circleci-v2-sdk/sdk/models/operations";

let value: Artifact = {
    nodeIndex: 544647,
    path: "/usr/share",
    url: "https://lovable-gazelle.org",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `nodeIndex`                                     | *number*                                        | :heavy_check_mark:                              | The index of the node that stored the artifact. |
| `path`                                          | *string*                                        | :heavy_check_mark:                              | The artifact path.                              |
| `url`                                           | *string*                                        | :heavy_check_mark:                              | The URL to download the artifact contents.      |