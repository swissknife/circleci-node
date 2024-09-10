# Collaboration

## Example Usage

```typescript
import { Collaboration } from "circleci-v2-sdk/sdk/models/operations";

let value: Collaboration = {
  avatarUrl: "<value>",
  id: "efc1b451-2c10-4326-88dc-2f615199ebfd",
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