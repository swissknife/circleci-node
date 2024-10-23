# Collaboration

## Example Usage

```typescript
import { Collaboration } from "circleci-v2-sdk/sdk/models/operations";

let value: Collaboration = {
  avatarUrl: "https://impassioned-presume.biz/",
  id: "1eb9cd7e-e498-48f4-9fe7-dca53ad0a7e5",
  name: "<value>",
  slug: "<value>",
  vcsType: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `avatarUrl`                         | *string*                            | :heavy_check_mark:                  | URL to the user's avatar on the VCS |
| `id`                                | *string*                            | :heavy_check_mark:                  | The UUID of the organization        |
| `name`                              | *string*                            | :heavy_check_mark:                  | The name of the organization        |
| `slug`                              | *string*                            | :heavy_check_mark:                  | The slug of the organization        |
| `vcsType`                           | *string*                            | :heavy_check_mark:                  | The VCS provider                    |